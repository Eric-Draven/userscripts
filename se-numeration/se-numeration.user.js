// ==UserScript==
// @name Numeration for Search Engines
// @namespace se-numeration
// @description Нумерация для поисковиков: Yandex, Google, Mail.ru, Rambler, Yahoo, Bing, Sputnik. Полезен исключительно для пользователей системы продвижения сайтов - userator.ru
// @version 1.3.7
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
// @grant GM_addStyle
// ==/UserScript==

(function () {
	'use strict';
	let i,
		block,
		position,
		domain = window.top.location.hostname;

	function getUrlVars() {
		var vars = {};
		var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
			vars[key] = value;
		});
		return vars;
	}

	function addPosition(addTo) {
		[].forEach.call(document.querySelectorAll(addTo), function (e) {
			let div = document.createElement('div');
			div.setAttribute('class', 'se-numeration');
			div.innerHTML = (position + 1) + '.';
			e.insertBefore(div, e.firstChild);
			position++;
		});
	}

	function yandex() {
		if (window.top.location.href.indexOf('/tune/geo') >= 0) {
			GM_addStyle('.geo-map{display:none !important;}');
			document.getElementById('city__front-input').select();
		}
		else if (window.top.location.href.indexOf('/images/') >= 0) {
			return;
		} else {
			GM_addStyle('.se-numeration{float:left;line-height:normal;margin:2px 8px 0 8px;color:#bf0000;font-size:17px;font-weight:700;}' +
						'.distro, .extended-meta, .page-content__col_pos_right, .profit_layout_footer, .content .content__right, .related, .main__carousel, .serp-user__login-input, .serp-user__password-input, .serp-user__user-login, .showcase, .promo-popup, .popup_autoclosable_no, .z-default-search, .logo-description{display:none !important;}' +
						'body .main{padding-bottom:10px !important;}' +
						'body .footer{background-color:#555 !important;padding:4px !important;}' +
						'body .serp-header_has-head-stripe_yes{margin:0 !important;}' +
						'.footer .footer__inner{padding:10px !important;}' +
						'.footer .footer__line{line-height:20px !important;}' +
						'.misspell__message{color:red;font-weight:700 !important;}' +
						'.region-change__link, .region-change__link:visited, .document__provider-name{color:red !important;}' +
						'.content .content__left{width:800px !important;}' +
						'.intents .intents__container{margin:4px 0 0 30px !important;}' +
						'.competitors__link{margin-right:10px !important;}' +
						'.misspell, .serp-item, .pager{margin-bottom:12px !important;}');
			window.blocks = function () {
				[].forEach.call(document.getElementsByClassName('main__content'), function (e) {
					if (e.querySelectorAll('.se-numeration').length === 0) {
						block = e.querySelectorAll('.head-stripe, .t-construct-adapter__videowiz');
						for (i = 0; i < block.length; i++) {
							block[i].parentNode.removeChild(block[i]);
						}
						block = e.querySelectorAll('.serp-item');
						for (i = 0; i < block.length; i++) {
							if (block[i].querySelectorAll('.extralinks, .video2_theme_online').length === 0) {
								block[i].parentNode.removeChild(block[i]);
							} else if (block[i].querySelectorAll('.composite').length !== 0) {
								block[i].parentNode.removeChild(block[i]);
							} else {
								block[i].className += " se-goodblock";
							}
						}
						position = getUrlVars().p;
						if (position > 0) {
							position = position * e.querySelectorAll('.serp-item').length;
						} else {
							position = 0;
						}
						addPosition('.se-goodblock');
					}
				});
			};
		}
		window.addEventListener('DOMNodeInserted', blocks, false);
		blocks();
	}

	function google() {
		console.time('111');
		GM_addStyle('.se-numeration{float:left;font-size:17px;margin-left:-40px;color:#bf0000;font-weight:700;}' +
					'#tads, #tadsb, #rhs, #newsbox, #imagebox_bigimages, #extrares, #lclbox, #tvcap, #flun, #kx, #lud-dsu, #bottomads, .rgsep, ._Mcf, .serptrends_histwrapper, .no-sep, .tpo, .kappbar, .vk_c, g-section-with-header, g-scrolling-carousel{display:none !important;}' +
					'.g g-section-with-header{display:block !important;}' +
					'.g{margin-bottom:15px !important;}' +
					'#cnt #center_col{width:850px !important;}' +
					'.s{max-width:848px !important;}');
		window.blocks = function () {
			[].forEach.call(document.querySelectorAll('#res'), function (e) {
				if (e.querySelectorAll('.se-numeration').length === 0) {
					block = e.querySelectorAll('.g.mnr-c.g-blk, #imagebox_bigimages, .g.mod, .g._rk, .g ._rk, .mod .g');
					for (i = 0; i < block.length; i++) {
						block[i].parentNode.removeChild(block[i]);
					}
					block = e.querySelectorAll('.g');
					for (i = 0; i < block.length; i++) {
						if (block[i].querySelectorAll('*').length === 0 || block[i].querySelectorAll('.rc .s').length === 0 && block[i].querySelectorAll('.r').length !== 0) {
							block[i].parentNode.removeChild(block[i]);
						}
					}
					block = e.querySelectorAll('.g h3 a');
					for (i = 0; i < block.length; i++) {
						block[i].setAttribute('target', '_blank');
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
		};
		window.addEventListener('DOMNodeInserted', blocks, false);
		blocks();
		console.timeEnd('111');
	}

	function mail() {
		GM_addStyle('.se-numeration{float:left;margin-right:8px;font-size:17px;color:#bf0000;font-weight:700;}' +
					'.js-container, #js-bottomBlock .ya-block, .fuab_bottom, #layout #layout-content #js-topBlock, .result__address, #js-kb-col-right, .responses__pxtRBMail, #layout #layout-content .responses > div[class] > div[id] > div[class], #section-web .footer__wrap .footer-neuro, .footer-blocks{display:none !important;}' +
					'.result__li{margin-bottom:4px !important;}' +
					'.layout-content__wrapper{padding-bottom:0px;}' +
					'.block-info-serp__url{color:darkgreen;font-size:15px;}' +
					'.result__title{white-space:nowrap;}' +
					'.layout-content{padding-bottom:60px;}' +
					'.result__microdata_video__img, .result__person__img{margin-right:15px;}' +
					'.layout_two-coll .layout-content__wrapper{margin-right:0;}' +
					'.responses{max-width:800px;width:800px;}' +
					'.rightcol .layout-content__wrapper{border-right:none;width:800px;}');
		window.blocks = function () {
			[].forEach.call(document.querySelectorAll('#js-result'), function (e) {
				if (e.querySelectorAll('.se-numeration').length === 0) {
					block = e.querySelectorAll('.smack-afisha, .smack-answer, .smack-app, .smack-calendar, .smack-converter, .smack-facts, .smack-games, .smack-howtos, .smack-images, .smack-map, .smack-metro, .smack-music, .smack-music-artist, .smack-news, .smack-newstext, .smack-person, .smack-recipes, .smack-spritze, .smack-tagpages, .smack-torg, .smack-tv-programm, .smack-video, .smack-weather');
					for (i = 0; i < block.length; i++) {
						block[i].parentNode.removeChild(block[i]);
					}
					position = getUrlVars().sf;
					if (position > 0) {
						position = --position + 1;
					} else {
						position = 0;
					}
					addPosition('.result__li');
				}
			});
			block = document.querySelectorAll('#js-topBlock > section, #js-bottomBlock > section, #js-bottomBlock > div');
			for (i = 0; i < block.length; i++) {
				block[i].parentNode.removeChild(block[i]);
			}
		};
		window.addEventListener('DOMNodeInserted', blocks, false);
		blocks();
	}

	function rambler() {
		GM_addStyle('.se-numeration{float:left;margin-right:8px;line-height:21px;font-size:18px;color:#bf0000;font-weight:700;}' +
					'.ad, .mixednews, #recommendations, .l-aside, .b-advertising, .b-context, .b-hints, .b-informers, .b-mixin, .b-podmes_images, .b-provider, .b-right-column, .b-footer__promo, .head-stripe__x, .b-widgets{display:none !important;}' +
					'.b-paging{padding-top:10px;}' +
					'.l-header{margin:0;}' +
					'.b-header__search{margin:200px 0 400px 0;}' +
					'.b-settings{margin-bottom:-118px;}' +
					'.b-serp-item__info{color:#006400;font-size:14px;}' +
					'.l-main{width:90%;padding:20px 0 !important;}' +
					'.b-serp-item{max-width:90%;padding-bottom:6px !important;}' +
					'.b-footer, .b-footer__content{height:auto;line-height:30px;}' +
					'.l-wrapper{margin-bottom:0;}' +
					'.l-wrapper::after{height:auto;}' +
					'.l-content{padding:0;}' +
					'.b-serp-item__favicon{margin-left:-8px;}' +
					'.b-serp-item__header{padding-bottom:0;}');
		window.blocks = function () {
			[].forEach.call(document.getElementsByClassName('l-main'), function (e) {
				if (e.querySelectorAll('.se-numeration').length === 0) {
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
		window.addEventListener('DOMNodeInserted', blocks, false);
		blocks();
	}

	function yahoo() {
		GM_addStyle('.se-numeration{float:left;font-size:18px;line-height:15px;margin:3px 12px 56px 0;color:#bf0000;font-weight:700;}' +
					'#right, #appFinance, #browserExtensionPromotion, .searchCenterBottomAds, .searchCenterFooter, .appMathCalculator, .f5110t0q65, .dd{display:none !important;}' +
					'.assist, .wrapstar, .algo, .pagination{display:block !important;}' +
					'.sc, #results #main #web .singlecol.sc.tt.twc, .dd, #results #web .dd, .ddgrp .dd, #results #web .ddgrp .dd, .searchCenterBottom{margin-top:0 !important;}' +
					'#bd{min-height:auto !important;min-width:auto !important;}' +
					'#main{margin-left:-10px;border:none !important;}' +
					'#left{width:900px !important;}' +
					'.compPagination a, .compPagination strong{padding:10px !important;}' +
					'.searchTop{margin-left:36px !important;}' +
					'.mb-15{margin-bottom:0 !important;}' +
					'.searchBottom .lst{margin-left:0 !important;}');
		position = getUrlVars().b;
		if (position > 0) {
			position = --position;
		} else {
			position = 0;
		}
		[].forEach.call(document.getElementsByClassName('searchCenterMiddle'), function (e) {
			if (e.querySelectorAll('.se-numeration').length === 0) {
				addPosition('.wrapstar, .algo');
			}
		});
	}

	function bing() {
		GM_addStyle('.se-numeration{float:left;margin-right:8px;line-height:24px;font-size:20px;color:#bf0000;font-family:"Segoe UI";font-weight:500;}' +
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
		GM_addStyle('.se-numeration{float:left;line-height:normal;margin:2px 8px 0 0;color:#bf0000;font-size:17px;font-weight:700;}' +
					'.b-widgets, .b-content-right, .b-teaser, .js-panel{display:none !important;}' +
					'.b-head{height:500px;}' +
					'.b-fon{margin-top:100px;}' +
					'.b-content-center{width:800px;}' +
					'.b-content{padding:20px 0 0;}' +
					'.b-result{padding:0 0 8px 30px;}' +
					'.b-result-site-main{font-size:14px;}' +
					'.b-result-title a{clear:left;}');
		window.badblocks = function () {
			[].forEach.call(document.querySelectorAll('.b-content-center'), function (e) {
				if (e.querySelectorAll('.se-numeration').length === 0) {
					block = e.querySelectorAll('.js-widget-currency, .js-widget-news, .js-widget-pics, .js-widget-video, .js-widget-weather, .js-widget-movie');
					for (i = 0; i < block.length; i++) {
						block[i].parentNode.removeChild(block[i]);
					}
					position = getUrlVars().from;
					if (position > 0) {
						position = --position;
					} else {
						position = 0;
					}
					addPosition('.b-result');
				}
			});
		};
		window.addEventListener('DOMNodeInserted', badblocks, false);
		badblocks();
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
