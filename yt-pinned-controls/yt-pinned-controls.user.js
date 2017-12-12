// ==UserScript==
// @name YouTube Pinned Controls
// @namespace yt-pinned-controls
// @description Отключение автоматического скрытия контрольной панели просматриваемого ролика на YouTube. Полезен исключительно для пользователей системы продвижения сайтов - userator.ru
// @version 1.0.1
// @author Eric Draven
// @updateURL https://github.com/Eric-Draven/userscripts/raw/master/yt-pinned-controls/yt-pinned-controls.meta.js
// @downloadURL https://github.com/Eric-Draven/userscripts/raw/master/yt-pinned-controls/yt-pinned-controls.user.js
// @homepageURL https://github.com/Eric-Draven/userscripts/tree/master/yt-pinned-controls
// @include https://www.youtube.com/*
// @match https://www.youtube.com/*
// @grant none
// ==/UserScript==

(function () {
	'use strict';
	let timer,
		countdown;

	window.readyHandlers = [];
	window.ready = function ready(handler) {
		window.readyHandlers.push(handler);
		handleState();
	};
	window.handleState = function handleState() {
		if (['interactive', 'complete'].indexOf(document.readyState) > -1) {
			while (window.readyHandlers.length > 0) {
				(window.readyHandlers.shift())();
			}
		}
	};
	document.onreadystatechange = window.handleState;

	function GM_addStyle(css) {
		let head = document.getElementsByTagName('head')[0];
		if (head) {
			let style = document.createElement('style');
			style.setAttribute('type', 'text/css');
			style.textContent = css;
			head.appendChild(style);
			return style;
		}
		return null;
	}

	function onStyle() {
		GM_addStyle('.ytp-autohide .ytp-chrome-top, .ytp-autohide .ytp-chrome-bottom, .ytp-chrome-top[aria-hidden="true"], .ytp-chrome-bottom[aria-hidden="true"],' +
					'.ytp-gradient-top[aria-hidden="true"], .ytp-gradient-bottom[aria-hidden="true"], .ytp-autohide .ytp-gradient-top, .ytp-autohide .ytp-gradient-bottom{opacity:1 !important;}' +
					'.ytp-scrubber-button{transform:scale(1);}' +
					'.ytp-autohide:not(.ytp-ad-overlay-open) .ytp-iv-player-content, .ytp-hide-controls .ytp-iv-player-content{bottom:49px}');
	}
	function offStyle() {
		GM_addStyle('.ytp-autohide .ytp-chrome-top, .ytp-autohide .ytp-chrome-bottom, .ytp-chrome-top[aria-hidden="true"], .ytp-chrome-bottom[aria-hidden="true"],' +
					'.ytp-gradient-top[aria-hidden="true"], .ytp-gradient-bottom[aria-hidden="true"], .ytp-autohide .ytp-gradient-top, .ytp-autohide .ytp-gradient-bottom{opacity:0 !important;}' +
					'.ytp-scrubber-button{transform:scale(0);}' +
					'.ytp-autohide:not(.ytp-ad-overlay-open) .ytp-iv-player-content, .ytp-hide-controls .ytp-iv-player-content{bottom:12px}');
	}
	function startTimer() {
		let href = window.location.href,
			player = document.getElementById('movie_player'),
			v = player.querySelector('video'),
			p = player.querySelector('.ytp-play-progress'),
			l = player.querySelector('.ytp-load-progress'),
			c = player.querySelector('.ytp-scrubber-container'),
			t = player.querySelector('.ytp-time-current');
		timer = setInterval(function() {
			if (v.currentTime < 2 || v.paused === true || v.ended === true) {
				return;
			} else {
				let time = v.currentTime,
					dur = v.duration,
					now = Math.round(time),
					hours = Math.floor(now / 3600),
					minutes = Math.floor((now - hours * 3600) / 60),
					seconds = now - hours * 3600 - minutes * 60;
				if (hours > 0) {
					hours = hours + ':';
					minutes = '0' + minutes;
				}
				if (seconds < 10) {
					seconds = '0' + seconds;
				}
				p.style.transform = 'scaleX(' + (time / dur) + ')';
				l.style.transform = 'scaleX(' + (v.buffered.end(v.buffered.length - 1) / dur) + ')';
				c.style.transform = 'translateX(' + ((player.querySelector('.ytp-chrome-bottom').offsetWidth * time / dur)) + 'px)';
				t.innerHTML = (hours + minutes + ':' + seconds);
			}
		}, 980);
	}
	function init() {
		let href = window.location.href;
		if (href.indexOf('/watch?') >= 0 && href.indexOf('&list=') >= 0 || href.indexOf('/watch?') >= 0 && document.querySelector('#autoplay-checkbox')) {
			onStyle();
			GM_addStyle('.yt-p-c-panel{opacity:1;}');
			let getParent = document.getElementById("watch7-sidebar-modules"),
				panel = document.createElement("div");
			panel.setAttribute("class", "watch-sidebar-section yt-p-c-panel");
			panel.innerHTML = '<div class="autoplay-bar">' +
				'<div class="checkbox-on-off">' +
				'<label for="yt-pinned-controls-checkbox">Закреплена </label>' +
				'<span class="autoplay-hovercard yt-uix-hovercard">' +
				'<span class="autoplay-info-icon yt-uix-button-opacity yt-uix-hovercard-target yt-sprite" data-orientation="vertical" data-position="topright"></span>' +
				'<span class="yt-uix-hovercard-content">Если функция включена, контрольная панель ролика не будет скрываться.</span>' +
				'</span>' +
				'<span class="yt-uix-checkbox-on-off">' +
				'<input id="yt-pinned-controls-checkbox" class="yt-pinned-controls on" checked="" type="checkbox">' +
				'<label for="yt-pinned-controls-checkbox" id="yt-pinned-controls-checkbox-label">' +
				'<span class="checked"></span>' +
				'<span class="toggle"></span>' +
				'<span class="unchecked"></span>' +
				'</label>' +
				'</span>' +
				'</div>' +
				'<h4 class="watch-sidebar-head yt-p-c-countdown">Контрольная панель 15</h4>' +
				'</div>';
			getParent.appendChild(panel);
			getParent.insertBefore(panel, getParent.firstChild);

			let cText = document.querySelector('.yt-p-c-countdown'),
				c = 15;
			countdown = setInterval(function() {
				cText.innerHTML = 'Контрольная панель ' + --c;
				if (c === 0) {
					countdown = clearInterval(countdown);
					GM_addStyle('.yt-p-c-panel{opacity:0;transition:opacity 1s 0s ease;}' +
								'.yt-p-c-panel:hover{opacity:1;}');
					cText.innerHTML = 'Контрольная панель';
				}
			}, 1000);

			startTimer();

			let onOff = document.getElementById('yt-pinned-controls-checkbox'),
				obj = {
					handleEvent: function() {
						if (onOff.className.indexOf('off') === -1 ) {
							offStyle();
							onOff.classList.remove('on');
							onOff.classList.add('off');
							clearInterval(timer);
						} else {
							onStyle();
							onOff.classList.remove('off');
							onOff.classList.add('on');
							startTimer();
						}
					}
				};
			onOff.addEventListener("click", obj, false);
		} else if (href.indexOf('/user/') >= 0 || href.indexOf('/channel/') >= 0 || href.indexOf('/watch?') >= 0 && href.indexOf('&list=') < 0 && !document.querySelector('#autoplay-checkbox')) {
			offStyle();
		}
	}
	ready(function () {
		timer = clearInterval(timer);
		countdown = clearInterval(countdown);
		init();
	});
	window.addEventListener("spfdone", function() {
		timer = clearInterval(timer);
		countdown = clearInterval(countdown);
		init();
	});
})();
