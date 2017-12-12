// ==UserScript==
// @name YouTube Search Results URLs as Text
// @namespace youtube-sr-urls-as-text
// @description Дополнение поисковой выдачи YouTube ссылками (в виде текста) на: видео, плейлисты, каналы, пользователей. Полезен исключительно для пользователей системы продвижения сайтов - userator.ru
// @version 1.0.4
// @author Eric Draven
// @updateURL https://github.com/Eric-Draven/userscripts/raw/master/youtube-sr-urls-as-text/youtube-sr-urls-as-text.meta.js
// @downloadURL https://github.com/Eric-Draven/userscripts/raw/master/youtube-sr-urls-as-text/youtube-sr-urls-as-text.user.js
// @homepageURL https://github.com/Eric-Draven/userscripts/tree/master/youtube-sr-urls-as-text
// @require https://code.jquery.com/jquery-3.2.1.slim.min.js
// @include https://www.youtube.com/*
// @match https://www.youtube.com/*
// @grant none
// ==/UserScript==

(function () {
	'use strict';

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

	let youtubeURL = window.location.origin,
		headerVIDEO = '<span class="script-video">видео &#10549;</span>',
		headerPLAYLIST = '<span class="script-playlist">плейлист &#10549;</span>',
		headerCHANNEL = '<span class="script-channel">канал &#10549;</span>',
		headerUSER = '<span class="script-user">пользователя &#10549;</span>',
		linkto = '',
		linksto = '',
		posterH = $('.yt-lockup-movie-vertical-poster').height() + 87;

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

	GM_addStyle("#results .yt-lockup-tile {padding:10px 15px 20px 15px !important;}" +
				".yt-lockup-movie-vertical-poster {height:" + (posterH) + "px !important;}" +
				".yt-lockup-movie-vertical-poster .yt-lockup-movie-top-content {height:90% !important;}" +
				".yt-lockup-movie-vertical-poster .yt-lockup-movie-bottom-content {height:10% !important;}" +
				".script-border {margin-top:7px;padding-top:7px;border-top:1px dashed #444;color:#444;font-size:13px;}" +
				".script-video, .script-playlist, .script-channel, .script-user {padding-top:3px;font-size:13px;}" +
				".script-video {color:#ca0000;}" +
				".script-playlist {color:#9f8c00;}" +
				".script-channel {color:#4f9f00;}" +
				".script-user {color:#3a0075;}" +
				".script-linebreak {margin-bottom:3px;}" +
				".script-mb {margin-bottom:10px;}");

	window.blocks = function () {
		if (window.location.href.indexOf("/results?") >= 0) {
			linkto = 'Ссылка на: ';
			linksto = 'Ссылки на: ';
		} else {
			linkto = '<div class="script-linebreak">Ссылка на: </div>';
			linksto = '<div class="script-linebreak">Ссылки на: </div>';
		}

		if (!$('.yt-lockup .yt-lockup-content[class*="script-urls-goodblock"]').length && $(".yt-lockup .yt-lockup-content .yt-lockup-title a").length) {
			$(".yt-lockup .yt-lockup-content").addClass("script-urls-goodblock");
			$(".script-urls-goodblock").each(function () {

				let titleURL = $(this).find(".yt-lockup-title a").attr("href");
				if (titleURL === undefined) {
					return;
				}
				// 1 link - User
				else if (titleURL.indexOf("/user/") >= 0) {
					$(this).append("<div class='script-border'>" + (linkto + headerUSER) + "</div>" +
								   "<div class='script-user script-mb'>" + (youtubeURL + titleURL) + "</div>");
				}
				// Channel
				else if (titleURL.indexOf("/channel/") >= 0) {
					$(this).append("<div class='script-border'>" + (linkto + headerCHANNEL) + "</div>" +
								   "<div class='script-channel script-mb'>" + (youtubeURL + titleURL) + "</div>");
				}
				// Playlist
				else if (titleURL.indexOf("/playlist?") >= 0) {
					$(this).append("<div class='script-border'>" + (linkto + headerPLAYLIST) + "</div>" +
								   "<div class='script-playlist script-mb'>" + (youtubeURL + titleURL) + "</div>");
				}
				else {
					// Video
					let cardURL = $(this).find(".yt-lockup-byline a").attr("href");
					if (cardURL === undefined) {
						$(this).append("<div class='script-border'>" + (linkto + headerVIDEO) + "</div>" +
									   "<div class='script-video script-mb'>" + (youtubeURL + titleURL) + "</div>");
					} else {
						// 2 links - Video / Channel
						if ( (titleURL.indexOf("watch?") >= 0 ) && (cardURL.indexOf("/channel/") >= 0) ) {
							$(this).append("<div class='script-border'>" + (linksto + headerVIDEO) + " / " + (headerCHANNEL) + "</div>" +
										   "<div class='script-video'>" + (youtubeURL + titleURL) + "</div>" +
										   "<div class='script-channel script-mb'>" + (youtubeURL + cardURL) + "</div>");
						}
						// Playlist / Channel
						else if ( (titleURL.indexOf("/playlist?") >= 0 ) && (cardURL.indexOf("/channel/") >= 0) ) {
							$(this).append("<div class='script-border'>" + (linksto + headerPLAYLIST) + " / " + (headerCHANNEL) + "</div>" +
										   "<div class='script-playlist'>" + (youtubeURL + titleURL) + "</div>" +
										   "<div class='script-channel script-mb'>" + (youtubeURL + cardURL) + "</div>");
						}
						// Video / User
						else if ( (titleURL.indexOf("/watch?") >= 0 ) && (cardURL.indexOf("/user/") >= 0) ) {
							$(this).append("<div class='script-border'>" + (linksto + headerVIDEO) + " / " + (headerUSER) + "</div>" +
										   "<div class='script-video'>" + (youtubeURL + titleURL) + "</div>" +
										   "<div class='script-user script-mb'>" + (youtubeURL + cardURL) + "</div>");
						}
						// Playlist / User
						else if ( (titleURL.indexOf("/playlist?") >= 0 ) && (cardURL.indexOf("/user/") >= 0) ) {
							$(this).append("<div class='script-border'>" + (linksto + headerPLAYLIST) + " / " + (headerUSER) + "</div>" +
										   "<div class='script-playlist'>" + (youtubeURL + titleURL) + "</div>" +
										   "<div class='script-user script-mb'>" + (youtubeURL + cardURL) + "</div>");
						}
					}
				}
			});
		}
	};
	window.addEventListener('DOMNodeInserted', blocks, false);
	blocks();
})();
