// ==UserScript==
// @name Numeration for Search Engines
// @namespace se-numeration
// @description Нумерация для поисковиков: Yandex, Google, Mail.ru, Rambler, Yahoo, Bing, Sputnik. Полезен исключительно для пользователей системы продвижения сайтов - userator.ru
// @version 1.5a7
// @author Eric Draven
// @updateURL https://github.com/Eric-Draven/userscripts/raw/master/se-numeration/se-numeration.meta.js
// @downloadURL https://github.com/Eric-Draven/userscripts/raw/master/se-numeration/se-numeration.user.js
// @homepageURL https://github.com/Eric-Draven/userscripts/tree/master/se-numeration
// @include *://yandex.ru/*
// @include *://yandex.ua/*
// @include *://yandex.fr/*
// @include *://yandex.by/*
// @include *://yandex.kz/*
// @include *://yandex.com/*
// @include *://yandex.com.tr/*
// @include *://www.yandex.ru/*
// @include *://www.yandex.ua/*
// @include *://www.yandex.fr/*
// @include *://www.yandex.by/*
// @include *://www.yandex.kz/*
// @include *://www.yandex.com/*
// @include *://www.yandex.com.tr/*
// @include *://news.yandex.ru/*
// @include *://news.yandex.ua/*
// @include *://news.yandex.fr/*
// @include *://news.yandex.by/*
// @include *://news.yandex.kz/*
// @include *://news.yandex.com/*
// @include *://news.yandex.com.tr/*
// @include *://go.mail.ru/*
// @include *://rambler.ru/*
// @include *://www.rambler.ru/*
// @include *://nova.rambler.ru/*
// @include *://search.yahoo.com/*
// @include *://bing.com/*
// @include *://www.bing.com/*
// @include *://sputnik.ru/*
// @include *://www.sputnik.ru/*
// @include *://google.*
// @include *://www.google.*
// @include *://encrypted.google.*
// @match *://yandex.ru/*
// @match *://yandex.ua/*
// @match *://yandex.fr/*
// @match *://yandex.by/*
// @match *://yandex.kz/*
// @match *://yandex.com/*
// @match *://yandex.com.tr/*
// @match *://www.yandex.ru/*
// @match *://www.yandex.ua/*
// @match *://www.yandex.fr/*
// @match *://www.yandex.by/*
// @match *://www.yandex.kz/*
// @match *://www.yandex.com/*
// @match *://www.yandex.com.tr/*
// @match *://news.yandex.ru/*
// @match *://news.yandex.ua/*
// @match *://news.yandex.fr/*
// @match *://news.yandex.by/*
// @match *://news.yandex.kz/*
// @match *://news.yandex.com/*
// @match *://news.yandex.com.tr/*
// @match *://go.mail.ru/*
// @match *://rambler.ru/*
// @match *://www.rambler.ru/*
// @match *://nova.rambler.ru/*
// @match *://search.yahoo.com/*
// @match *://bing.com/*
// @match *://www.bing.com/*
// @match *://sputnik.ru/*
// @match *://www.sputnik.ru/*
// @match *://*.google.ad/*
// @match *://*.google.ae/*
// @match *://*.google.al/*
// @match *://*.google.am/*
// @match *://*.google.as/*
// @match *://*.google.at/*
// @match *://*.google.az/*
// @match *://*.google.ba/*
// @match *://*.google.be/*
// @match *://*.google.bf/*
// @match *://*.google.bg/*
// @match *://*.google.bi/*
// @match *://*.google.bj/*
// @match *://*.google.bs/*
// @match *://*.google.by/*
// @match *://*.google.ca/*
// @match *://*.google.cat/*
// @match *://*.google.cc/*
// @match *://*.google.cd/*
// @match *://*.google.cf/*
// @match *://*.google.cg/*
// @match *://*.google.ch/*
// @match *://*.google.ci/*
// @match *://*.google.cl/*
// @match *://*.google.cm/*
// @match *://*.google.co.ao/*
// @match *://*.google.co.bw/*
// @match *://*.google.co.ck/*
// @match *://*.google.co.cr/*
// @match *://*.google.co.id/*
// @match *://*.google.co.il/*
// @match *://*.google.co.in/*
// @match *://*.google.co.jp/*
// @match *://*.google.co.ke/*
// @match *://*.google.co.kr/*
// @match *://*.google.co.ls/*
// @match *://*.google.co.ma/*
// @match *://*.google.co.mz/*
// @match *://*.google.co.nz/*
// @match *://*.google.co.th/*
// @match *://*.google.co.tz/*
// @match *://*.google.co.ug/*
// @match *://*.google.co.uk/*
// @match *://*.google.co.uz/*
// @match *://*.google.co.ve/*
// @match *://*.google.co.vi/*
// @match *://*.google.co.za/*
// @match *://*.google.co.zm/*
// @match *://*.google.co.zw/*
// @match *://*.google.com.af/*
// @match *://*.google.com.ag/*
// @match *://*.google.com.ai/*
// @match *://*.google.com.ar/*
// @match *://*.google.com.au/*
// @match *://*.google.com.bd/*
// @match *://*.google.com.bh/*
// @match *://*.google.com.bn/*
// @match *://*.google.com.bo/*
// @match *://*.google.com.br/*
// @match *://*.google.com.bz/*
// @match *://*.google.com.co/*
// @match *://*.google.com.cu/*
// @match *://*.google.com.cy/*
// @match *://*.google.com.do/*
// @match *://*.google.com.ec/*
// @match *://*.google.com.eg/*
// @match *://*.google.com.et/*
// @match *://*.google.com.fj/*
// @match *://*.google.com.gh/*
// @match *://*.google.com.gi/*
// @match *://*.google.com.gt/*
// @match *://*.google.com.hk/*
// @match *://*.google.com.jm/*
// @match *://*.google.com.kh/*
// @match *://*.google.com.kh/*
// @match *://*.google.com.kw/*
// @match *://*.google.com.lb/*
// @match *://*.google.com.ly/*
// @match *://*.google.com.mm/*
// @match *://*.google.com.mt/*
// @match *://*.google.com.mx/*
// @match *://*.google.com.my/*
// @match *://*.google.com.na/*
// @match *://*.google.com.nf/*
// @match *://*.google.com.ng/*
// @match *://*.google.com.ni/*
// @match *://*.google.com.np/*
// @match *://*.google.com.om/*
// @match *://*.google.com.pa/*
// @match *://*.google.com.pe/*
// @match *://*.google.com.pg/*
// @match *://*.google.com.ph/*
// @match *://*.google.com.pk/*
// @match *://*.google.com.pr/*
// @match *://*.google.com.py/*
// @match *://*.google.com.qa/*
// @match *://*.google.com.sa/*
// @match *://*.google.com.sb/*
// @match *://*.google.com.sg/*
// @match *://*.google.com.sl/*
// @match *://*.google.com.sv/*
// @match *://*.google.com.tj/*
// @match *://*.google.com.tn/*
// @match *://*.google.com.tr/*
// @match *://*.google.com.tw/*
// @match *://*.google.com.ua/*
// @match *://*.google.com.uy/*
// @match *://*.google.com.vc/*
// @match *://*.google.com.vn/*
// @match *://*.google.cv/*
// @match *://*.google.cz/*
// @match *://*.google.de/*
// @match *://*.google.dj/*
// @match *://*.google.dk/*
// @match *://*.google.dm/*
// @match *://*.google.dz/*
// @match *://*.google.ee/*
// @match *://*.google.es/*
// @match *://*.google.fi/*
// @match *://*.google.fm/*
// @match *://*.google.fr/*
// @match *://*.google.ga/*
// @match *://*.google.ge/*
// @match *://*.google.gf/*
// @match *://*.google.gg/*
// @match *://*.google.gl/*
// @match *://*.google.gm/*
// @match *://*.google.gp/*
// @match *://*.google.gr/*
// @match *://*.google.gy/*
// @match *://*.google.hn/*
// @match *://*.google.hr/*
// @match *://*.google.ht/*
// @match *://*.google.hu/*
// @match *://*.google.ie/*
// @match *://*.google.im/*
// @match *://*.google.iq/*
// @match *://*.google.is/*
// @match *://*.google.it/*
// @match *://*.google.je/*
// @match *://*.google.jo/*
// @match *://*.google.kg/*
// @match *://*.google.ki/*
// @match *://*.google.kz/*
// @match *://*.google.la/*
// @match *://*.google.li/*
// @match *://*.google.lk/*
// @match *://*.google.lt/*
// @match *://*.google.lu/*
// @match *://*.google.lv/*
// @match *://*.google.md/*
// @match *://*.google.me/*
// @match *://*.google.mg/*
// @match *://*.google.mk/*
// @match *://*.google.ml/*
// @match *://*.google.mn/*
// @match *://*.google.ms/*
// @match *://*.google.mu/*
// @match *://*.google.mv/*
// @match *://*.google.mw/*
// @match *://*.google.ne/*
// @match *://*.google.nl/*
// @match *://*.google.no/*
// @match *://*.google.nr/*
// @match *://*.google.nu/*
// @match *://*.google.pl/*
// @match *://*.google.pn/*
// @match *://*.google.ps/*
// @match *://*.google.pt/*
// @match *://*.google.ro/*
// @match *://*.google.rs/*
// @match *://*.google.ru/*
// @match *://*.google.rw/*
// @match *://*.google.sc/*
// @match *://*.google.se/*
// @match *://*.google.sh/*
// @match *://*.google.si/*
// @match *://*.google.sk/*
// @match *://*.google.sm/*
// @match *://*.google.sn/*
// @match *://*.google.so/*
// @match *://*.google.st/*
// @match *://*.google.td/*
// @match *://*.google.tg/*
// @match *://*.google.tk/*
// @match *://*.google.tl/*
// @match *://*.google.tm/*
// @match *://*.google.to/*
// @match *://*.google.tt/*
// @match *://*.google.us/*
// @match *://*.google.vg/*
// @match *://*.google.vu/*
// @match *://*.google.ws/*
// @match *://google.com/*
// @match *://www.google.com/*
// @match *://encrypted.google.com/*
// @exclude ftp://*/*
// @grant none
// ==/UserScript==

(function () {
	'use strict';
	let i,
		node,
		position,
		domain = window.top.location.hostname;

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

	function getUrlVars() {
		let vars = {};
		let parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
			vars[key] = value;
		});
		return vars;
	}

	function pNrC(node) {
		for (i = 0; i < node.length; i++) {
			node[i].parentNode.removeChild(node[i]);
		}
	}


	function addPosition(addTo) {
		[].forEach.call(document.querySelectorAll(addTo), function (e) {
			let div = document.createElement('div');
			div.setAttribute('class', 'se-num');
			div.textContent = (position + 1) + '.';
			e.insertBefore(div, e.firstChild);
			position++;
		});
	}

	function ifCacheCleared() {
		let ss = sessionStorage.getItem('checkboxStatus');
		if (ss === 'se-on'){
			GM_addStyle('.se-serp-adv-item{display:block !important;}');
		} else {
			GM_addStyle('.se-serp-adv-item{display:none !important;}');
		}
		if (ss === null){
			sessionStorage.setItem('checkboxStatus', 'se-off');
		}
	}

	function yandex() {
		let href = window.top.location.href;
		if (href.indexOf('/tune/geo') >= 0) {
			GM_addStyle('.geo-map{display:none !important;}');
			document.getElementById('city__front-input').select();
		} else if (href.indexOf('//news.yandex.') >= 0) {
			GM_addStyle('.sticky_visible, .proffit_visible{display:none !important;}' +
						'.story-item__title{font-size:18px !important;}' +
						'.document__provider-name{color:#c03 !important;}');
		} else if (href.indexOf('/search/?') || href.indexOf('/yandsearch?') >= 0) {
			GM_addStyle('.se-num{float:left;line-height:normal;margin:2px 8px 0 8px;color:#c03;font-size:17px;font-weight:700;}' +
						'.se-badnode, .distr-default-search, .distro, .extended-meta, .page-content__col_pos_right, .profit_layout_footer, .content .content__right, .related, .main__carousel, .serp-user__login-input, .serp-user__password-input, .serp-user__user-login, .showcase, .promo-popup, .popup_autoclosable_no, .z-default-search, .logo-description, .distr-popup__content, .wrapper__cell_type_thumb .grid__col{display:none !important;}' +
						'body .main{padding-bottom:10px !important;}' +
						'body .footer{background-color:#555 !important;padding:4px !important;}' +
						'body .serp-header_has-head-stripe_yes{margin:0 !important;}' +
						'.footer .footer__inner{padding:10px !important;}' +
						'.footer .footer__line{line-height:20px !important;}' +
						'.misspell__message{color:#c03;font-weight:700 !important;}' +
						'.region-change__link, .region-change__link:visited{color:#c03 !important;}' +
						'.content .content__left{width:800px !important;}' +
						'.intents .intents__container{margin:4px 0 0 30px !important;}' +
						'.competitors__link{margin-right:10px !important;}' +
						'.misspell, .serp-item, .se-serp-adv-item, .pager{margin-bottom:12px !important;}' +
						'.serp-item .wrapper{display:block !important;}' +
						'.wrapper__cell_type_content{display:contents !important;width:100% !important;max-width:100% !important;padding-top:0 !important}' +
						'.label.label_color_yellow{background-color:#ff9 !important;}' +
						'.se-button-bar{display:inline-block;font-size:14px;font-weight:400;text-transform:none;letter-spacing:0;vertical-align:middle;line-height:40px;}' +
						'.se-checkbox{padding:0 8px;color:#999;}' +
						'.se-checkbox-on-off{position:relative;display:inline-block;width:35px;height:16px;padding-right:2px;overflow:hidden;vertical-align:middle;}' +
						'.se-checkbox-on-off input[type=checkbox]{position:absolute;margin:0;width:37px;height:15px;opacity:0;cursor:pointer;}' +
						'.se-checkbox-on-off input[type=checkbox]:checked+label{background-color:#090;}' +
						'.se-checkbox-on-off label>*{display:inline-block;height:100%;vertical-align:top;-moz-transition:width.1s;-webkit-transition:width.1s;transition:width.1s;-webkit-transition:all 0.3s ease 0s;transition:all 0.3s ease 0s;}' +
						'.se-checkbox-on-off label{display:inline-block;border:1px solid transparent;height:13px;width:100%;background-color:#999;border-radius:20px;}' +
						'.se-checkbox-on-off .checked{text-align:center;line-height:13px;}' +
						'.se-checkbox-on-off .checked, .se-checkbox-on-off input[type=checkbox]:checked+label .unchecked{width:0;}' +
						'.se-checkbox-on-off .toggle{background-color:#fff;width:13px;border-radius:13px;}' +
						'.se-checkbox-on-off .unchecked, .se-checkbox-on-off input[type=checkbox]:checked+label .checked{width:22px;}');
			window.loop = function () {
				[].forEach.call(document.querySelectorAll('.content__left'), function (e) {
					if (e.querySelectorAll('.se-num').length === 0) {
						node = e.querySelectorAll('.head-stripe, .t-construct-adapter__videowiz, .t-construct-adapter__default-search');
						pNrC(node);
						node = e.querySelectorAll('.serp-adv-item, .serp-item .organic__subtitle span style');
						for (i = 0; i < node.length; i++) {
							node[i].className = "se-serp-adv-item serp-adv-item";
						}
						node = e.querySelectorAll('.serp-item');
						for (i = 0; i < node.length; i++) {
							if (node[i].querySelectorAll('.extralinks, .video2_theme_online').length === 0) {
								node[i].className += " se-badnode";
							} else if (node[i].querySelectorAll('.composite, .organic__title-wrapper_lines_2').length !== 0) {
								node[i].className += " se-badnode";
							} else {
								node[i].className += " se-goodnode";
							}
						}
						position = getUrlVars().p;
						if (position > 0) {
							position = position * e.querySelectorAll('.se-goodnode').length;
						} else {
							position = 0;
						}
						addPosition('.se-goodnode');
						ifCacheCleared();
					}
				});

				if (document.querySelectorAll('.se-button-bar').length === 0) {
					let checkboxStatus = '',
						panel = document.createElement('div'),
						getParent = document.querySelectorAll('.navigation__region')[0];
					if (sessionStorage.getItem('checkboxStatus') === 'se-on'){
						checkboxStatus = 'checked="" ';
					}
					panel.setAttribute('class', 'se-button-bar');
					panel.innerHTML = '<div class="se-checkbox">Я.Директ: ' +
						'<span class="se-checkbox-on-off">' +
						'<input id="se-checkbox-on-off" ' + checkboxStatus + 'type="checkbox">' +
						'<label>' +
						'<span class="checked"></span>' +
						'<span class="toggle"></span>' +
						'<span class="unchecked"></span>' +
						'</label>' +
						'</span>' +
						' (' + document.querySelectorAll(".content__left .se-serp-adv-item").length + ')</div>';
					getParent.appendChild(panel);
					getParent.insertBefore(panel, getParent.lastChild);
					let onOff = document.getElementById('se-checkbox-on-off'),
						obj = {
							handleEvent: function() {
								if (sessionStorage.getItem('checkboxStatus') === 'se-on') {
									GM_addStyle('.se-serp-adv-item{display:none !important;}');
									sessionStorage.setItem('checkboxStatus', 'se-off');
								} else {
									GM_addStyle('.se-serp-adv-item{display:block !important;}');
									sessionStorage.setItem('checkboxStatus', 'se-on');
								}
							}
						};
					onOff.addEventListener("click", obj, false);
				}
			};
			window.addEventListener('DOMNodeInserted', loop, false);
			loop();
		}
	}

	function google() {
		GM_addStyle('.se-num{float:left;font-size:17px;margin-left:-40px;color:#c03;font-weight:700;}' +
					'#tads, #tadsb, #rhs, #newsbox, #imagebox_bigimages, #extrares, #lclbox, #tvcap, #flun, #kx, #lud-dsu, #bottomads, .rgsep, ._Mcf, .serptrends_histwrapper, .no-sep, .tpo, .kappbar, .vk_c, g-section-with-header, g-scrolling-carousel{display:none !important;}' +
					'.g g-section-with-header{display:block !important;}' +
					'.g{margin-bottom:15px !important;}' +
					'#cnt #center_col{width:850px !important;}' +
					'.s{max-width:848px !important;}');
		window.loop = function () {
			if (document.querySelectorAll('.mw #rcnt').length !== 0) {
				[].forEach.call(document.querySelectorAll('#res'), function (e) {
					if (e.querySelectorAll('.se-num').length === 0) {
						node = e.querySelectorAll('.g.mnr-c.g-blk, #imagebox_bigimages, .g.mod, .g._rk, .g ._rk, .mod .g, .vk_c');
						pNrC(node);
						node = e.querySelectorAll('.g');
						for (i = 0; i < node.length; i++) {
							if (node[i].querySelectorAll('*').length === 0 || node[i].querySelectorAll('.rc .s').length === 0 && node[i].querySelectorAll('.r').length !== 0 && node[i].querySelectorAll('.ts').length === 0) {
								node[i].parentNode.removeChild(node[i]);
							}
						}
						node = e.querySelectorAll('.g h3 a');
						for (i = 0; i < node.length; i++) {
							node[i].setAttribute('target', '_blank');
						}
						position = getUrlVars().start;
						if (position > 0) {
							position = --position + 1;
						} else {
							position = 0;
						}
						addPosition('#res .g');
					}
				});
			}
		};
		window.addEventListener('DOMNodeInserted', loop, false);
		loop();
	}

	function mail() {
		GM_addStyle('.se-num{float:left;margin-left:8px;margin-right:8px;font-size:17px;color:#c03;font-weight:700;}' +
					'#layout-carousel, .js-container, #js-bottomBlock .ya-block, .fuab_bottom, #layout #layout-content #js-topBlock, .result__address, #js-kb-col-right, .responses__pxtRBMail, #layout #layout-content .responses > div[class] > div[id] > div[class], #section-web .footer__wrap .footer-neuro, .footer-blocks{display:none !important;}' +
					'.result__li{margin-bottom:4px !important;}' +
					'.layout-content__wrapper{padding-bottom:0px;}' +
					'.block-info-serp__url{color:darkgreen;font-size:15px;}' +
					'.result__title{white-space:nowrap;}' +
					'.layout-content{padding-bottom:60px;}' +
					'.result__microdata_video__img, .result__person__img{margin-right:15px;}' +
					'.layout_two-coll .layout-content__wrapper{margin-right:0;}' +
					'.responses{max-width:800px;width:800px;}' +
					'.rightcol .layout-content__wrapper{border-right:none;width:800px;}' +
					'.snippet-sitelinks{margin-left:30px;}');
		window.loop = function () {
			[].forEach.call(document.querySelectorAll('#js-result'), function (e) {
				if (e.querySelectorAll('.se-num').length === 0) {
					node = e.querySelectorAll('.smack-afisha, .smack-answer, .smack-app, .smack-calendar, .smack-converter, .smack-facts, .smack-games, .smack-howtos, .smack-images, .smack-map, .smack-metro, .smack-music, .smack-music-artist, .smack-news, .smack-newstext, .smack-person, .smack-recipes, .smack-spritze, .smack-tagpages, .smack-torg, .smack-tv-programm, .smack-video, .smack-weather');
					pNrC(node);
					position = getUrlVars().sf;
					if (position > 0) {
						position = --position + 1;
					} else {
						position = 0;
					}
					addPosition('.result__li');
				}
			});
			node = document.querySelectorAll('body > div[id^=tb-], #amigoTopBn, #js-topBlock > section, #js-bottomBlock > section, #js-bottomBlock > div');
			pNrC(node);
		};
		window.addEventListener('DOMNodeInserted', loop, false);
		loop();
	}

	function rambler() {
		GM_addStyle('.se-num{float:left;margin-right:8px;line-height:25px;font-size:18px;color:#c03;font-weight:500;}' +
					'.ad, .mixednews, #recommendations, .l-aside, .b-advertising, .b-context, .b-hints, .b-informers, .b-mixin, .b-podmes_images, .b-provider, .b-right-column, .b-footer__promo, .head-stripe__x, .b-widgets{display:none !important;}' +
					'.l-header{margin:0;}' +
					'.b-header__search{margin:200px 0 400px 0;}' +
					'.b-paging{margin-top:15px;}' +
					'.l-page__height-filler{margin-bottom:15px;}' +
					'.b-serp-item__title{margin:0;}' +
					'.b-serp-item__info{margin:0;color:#006400;font-size:14px;}' +
					'.b-serp-item{margin-bottom:6px !important;}' +
					'.l-wrapper{margin-bottom:0;}' +
					'.l-wrapper::after{height:auto;}' +
					'.b-serp-item__favicon{margin-left:-8px;}' +
					'.b-serp-item__header{padding-bottom:0;}');
		window.loop = function () {
			[].forEach.call(document.querySelectorAll('.l-main-col'), function (e) {
				if (e.querySelectorAll('.se-num').length === 0) {
					position = getUrlVars().page;
					if (position > 0) {
						position = e.querySelectorAll('.b-serp-item').length * --position;
					} else {
						position = 0;
					}
					addPosition('.b-serp-item');
				}
			});
		};
		window.addEventListener('DOMNodeInserted', loop, false);
		loop();
	}

	function yahoo() {
		GM_addStyle('.se-num{float:left;font-size:18px;line-height:15px;margin:3px 12px 56px 0;color:#c03;font-weight:700;}' +
					'#right, #appFinance, #browserExtensionPromotion, .searchCenterBottomAds, .searchCenterFooter, .appMathCalculator, .f5110t0q65, .dd{display:none !important;}' +
					'.assist, .wrapstar, .algo, .pagination{display:block !important;}' +
					'.sc, #results #main #web .singlecol.sc.tt.twc, .dd, #results #web .dd, .ddgrp .dd, #results #web .ddgrp .dd, .searchCenterBottom{margin-top:0 !important;}' +
					'#bd{min-height:auto !important;min-width:auto !important;}' +
					'#main{margin-left:-10px;border:none !important;}' +
					'#left{width:900px !important;}' +
					'.compPagination a, .compPagination strong{padding:10px !important;}' +
					'.searchTop{margin-left:36px !important;}' +
					'.mb-15{margin-bottom:0 !important;}' +
					'.searchBottom .lst{margin-left:0 !important;}' +
					'.dd .compForm{margin-bottom:16px !important;}' +
					'#ft_wrapper #ft{padding-left:0;}' +
					'#ft_wrapper #ft ul{margin-left:134px;}');
		position = getUrlVars().b;
		if (position > 0) {
			position = --position;
		} else {
			position = 0;
		}
		[].forEach.call(document.querySelectorAll('.searchCenterMiddle'), function (e) {
			if (e.querySelectorAll('.se-num').length === 0) {
				addPosition('.wrapstar, .algo');
			}
		});
	}

	function bing() {
		GM_addStyle('.se-num{float:left;margin-right:8px;line-height:24px;font-size:20px;color:#c03;font-family:"Segoe UI";font-weight:500;}' +
					'.b_ad, .b_ad, .b_ans{display:none !important;}' +
					'#b_results{width:700px;}' +
					'#b_content{padding:0 0 0 100px;}' +
					'#b_results > .b_pag{padding:18px 0 18px 20px;}' +
					'#b_results > .b_algo{padding:0 20px;}' +
					'#b_footerItems{padding:0 10px;}' +
					'#b_footerItems a{margin-right:8px;}');
		position = getUrlVars().first;
		if (position > 0) {
			position = --position;
		} else {
			position = 0;
		}
		addPosition('.b_algo');
	}

	function sputnik() {
		GM_addStyle('.se-num{float:left;line-height:normal;margin:2px 8px 0 0;color:#c03;font-size:17px;font-weight:700;}' +
					'.b-widgets, .b-content-right, .b-teaser, .js-panel{display:none !important;}' +
					'.b-head{height:500px;}' +
					'.b-fon{margin-top:100px;}' +
					'.b-content-center{width:800px;}' +
					'.b-content{padding:20px 0 0;}' +
					'.b-result{padding:0 0 8px 30px;}' +
					'.b-result-site-main{font-size:14px;}' +
					'.b-result-title a{clear:left;}');
		[].forEach.call(document.querySelectorAll('.b-content-center'), function (e) {
			if (e.querySelectorAll('.se-num').length === 0) {
				node = e.querySelectorAll('.js-widget-currency, .js-widget-news, .js-widget-pics, .js-widget-video, .js-widget-weather, .js-widget-movie');
				pNrC(node);
				position = getUrlVars().from;
				if (position > 0) {
					position = --position;
				} else {
					position = 0;
				}
				addPosition('.b-result');
			}
		});
	}

	if (domain.indexOf('yandex.') >= 0) {
		yandex();
	}
	else if (domain.indexOf('google.') >= 0) {
		google();
	}
	else if (domain.indexOf('go.mail.ru') >= 0) {
		mail();
	}
	else if (domain.indexOf('rambler.') >= 0) {
		rambler();
	}
	else if (domain.indexOf('yahoo.') >= 0) {
		yahoo();
	}
	else if (domain.indexOf('bing.') >= 0) {
		bing();
	}
	else if (domain.indexOf('sputnik.') >= 0) {
		sputnik();
	}
	else {
		return;
	}
})();
