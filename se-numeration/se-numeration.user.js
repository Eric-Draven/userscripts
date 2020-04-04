// ==UserScript==
// @name Numeration for Search Engines
// @namespace se-numeration
// @description Нумерация для поисковиков: Yandex, Google, Mail.ru, Rambler, Yahoo, Bing, Sputnik. Полезен исключительно для пользователей системы продвижения сайтов - userator.ru
// @version 1.6.3
// @author Eric Draven
// @updateURL https://github.com/Eric-Draven/userscripts/raw/master/se-numeration/se-numeration.meta.js
// @downloadURL https://github.com/Eric-Draven/userscripts/raw/master/se-numeration/se-numeration.user.js
// @homepageURL https://github.com/Eric-Draven/userscripts/tree/master/se-numeration
// @include *://yandex.ru/*
// @include *://yandex.ua/*
// @include *://yandex.fr/*
// @include *://yandex.by/*
// @include *://yandex.kz/*
// @include *://yandex.uz/*
// @include *://yandex.lt/*
// @include *://yandex.com/*
// @include *://yandex.com.tr/*
// @include *://www.yandex.ru/*
// @include *://www.yandex.ua/*
// @include *://www.yandex.fr/*
// @include *://www.yandex.by/*
// @include *://www.yandex.kz/*
// @include *://www.yandex.uz/*
// @include *://www.yandex.com/*
// @include *://www.yandex.com.tr/*
// @include *://news.yandex.ru/*
// @include *://news.yandex.ua/*
// @include *://news.yandex.fr/*
// @include *://news.yandex.by/*
// @include *://news.yandex.kz/*
// @include *://news.yandex.uz/*
// @include *://news.yandex.com/*
// @include *://news.yandex.com.tr/*
// @include *://go.mail.ru/search?*
// @include *://nova.rambler.ru/*
// @include *://search.yahoo.com/*
// @include *://bing.com/search*
// @include *://www.bing.com/search*
// @include *://sputnik.ru/*
// @include *://www.sputnik.ru/*
// @include *://google.*/search*
// @include *://www.google.*/search*
// @include *://encrypted.google.*/search*
// @match *://yandex.ru/*
// @match *://yandex.ua/*
// @match *://yandex.fr/*
// @match *://yandex.by/*
// @match *://yandex.kz/*
// @match *://yandex.uz/*
// @match *://yandex.lt/*
// @match *://yandex.com/*
// @match *://yandex.com.tr/*
// @match *://www.yandex.ru/*
// @match *://www.yandex.ua/*
// @match *://www.yandex.fr/*
// @match *://www.yandex.by/*
// @match *://www.yandex.kz/*
// @match *://www.yandex.uz/*
// @match *://www.yandex.com/*
// @match *://www.yandex.com.tr/*
// @match *://news.yandex.ru/*
// @match *://news.yandex.ua/*
// @match *://news.yandex.fr/*
// @match *://news.yandex.by/*
// @match *://news.yandex.kz/*
// @match *://news.yandex.uz/*
// @match *://news.yandex.com/*
// @match *://news.yandex.com.tr/*
// @match *://go.mail.ru/search?*
// @match *://nova.rambler.ru/*
// @match *://search.yahoo.com/*
// @match *://bing.com/search*
// @match *://www.bing.com/search*
// @match *://sputnik.ru/*
// @match *://www.sputnik.ru/*
// @match *://*.google.ad/search*
// @match *://*.google.ae/search*
// @match *://*.google.al/search*
// @match *://*.google.am/search*
// @match *://*.google.as/search*
// @match *://*.google.at/search*
// @match *://*.google.az/search*
// @match *://*.google.ba/search*
// @match *://*.google.be/search*
// @match *://*.google.bf/search*
// @match *://*.google.bg/search*
// @match *://*.google.bi/search*
// @match *://*.google.bj/search*
// @match *://*.google.bs/search*
// @match *://*.google.by/search*
// @match *://*.google.ca/search*
// @match *://*.google.cat/search*
// @match *://*.google.cc/search*
// @match *://*.google.cd/search*
// @match *://*.google.cf/search*
// @match *://*.google.cg/search*
// @match *://*.google.ch/search*
// @match *://*.google.ci/search*
// @match *://*.google.cl/search*
// @match *://*.google.cm/search*
// @match *://*.google.co.ao/search*
// @match *://*.google.co.bw/search*
// @match *://*.google.co.ck/search*
// @match *://*.google.co.cr/search*
// @match *://*.google.co.id/search*
// @match *://*.google.co.il/search*
// @match *://*.google.co.in/search*
// @match *://*.google.co.jp/search*
// @match *://*.google.co.ke/search*
// @match *://*.google.co.kr/search*
// @match *://*.google.co.ls/search*
// @match *://*.google.co.ma/search*
// @match *://*.google.co.mz/search*
// @match *://*.google.co.nz/search*
// @match *://*.google.co.th/search*
// @match *://*.google.co.tz/search*
// @match *://*.google.co.ug/search*
// @match *://*.google.co.uk/search*
// @match *://*.google.co.uz/search*
// @match *://*.google.co.ve/search*
// @match *://*.google.co.vi/search*
// @match *://*.google.co.za/search*
// @match *://*.google.co.zm/search*
// @match *://*.google.co.zw/search*
// @match *://*.google.com.af/search*
// @match *://*.google.com.ag/search*
// @match *://*.google.com.ai/search*
// @match *://*.google.com.ar/search*
// @match *://*.google.com.au/search*
// @match *://*.google.com.bd/search*
// @match *://*.google.com.bh/search*
// @match *://*.google.com.bn/search*
// @match *://*.google.com.bo/search*
// @match *://*.google.com.br/search*
// @match *://*.google.com.bz/search*
// @match *://*.google.com.co/search*
// @match *://*.google.com.cu/search*
// @match *://*.google.com.cy/search*
// @match *://*.google.com.do/search*
// @match *://*.google.com.ec/search*
// @match *://*.google.com.eg/search*
// @match *://*.google.com.et/search*
// @match *://*.google.com.fj/search*
// @match *://*.google.com.gh/search*
// @match *://*.google.com.gi/search*
// @match *://*.google.com.gt/search*
// @match *://*.google.com.hk/search*
// @match *://*.google.com.jm/search*
// @match *://*.google.com.kh/search*
// @match *://*.google.com.kh/search*
// @match *://*.google.com.kw/search*
// @match *://*.google.com.lb/search*
// @match *://*.google.com.ly/search*
// @match *://*.google.com.mm/search*
// @match *://*.google.com.mt/search*
// @match *://*.google.com.mx/search*
// @match *://*.google.com.my/search*
// @match *://*.google.com.na/search*
// @match *://*.google.com.nf/search*
// @match *://*.google.com.ng/search*
// @match *://*.google.com.ni/search*
// @match *://*.google.com.np/search*
// @match *://*.google.com.om/search*
// @match *://*.google.com.pa/search*
// @match *://*.google.com.pe/search*
// @match *://*.google.com.pg/search*
// @match *://*.google.com.ph/search*
// @match *://*.google.com.pk/search*
// @match *://*.google.com.pr/search*
// @match *://*.google.com.py/search*
// @match *://*.google.com.qa/search*
// @match *://*.google.com.sa/search*
// @match *://*.google.com.sb/search*
// @match *://*.google.com.sg/search*
// @match *://*.google.com.sl/search*
// @match *://*.google.com.sv/search*
// @match *://*.google.com.tj/search*
// @match *://*.google.com.tn/search*
// @match *://*.google.com.tr/search*
// @match *://*.google.com.tw/search*
// @match *://*.google.com.ua/search*
// @match *://*.google.com.uy/search*
// @match *://*.google.com.vc/search*
// @match *://*.google.com.vn/search*
// @match *://*.google.cv/search*
// @match *://*.google.cz/search*
// @match *://*.google.de/search*
// @match *://*.google.dj/search*
// @match *://*.google.dk/search*
// @match *://*.google.dm/search*
// @match *://*.google.dz/search*
// @match *://*.google.ee/search*
// @match *://*.google.es/search*
// @match *://*.google.fi/search*
// @match *://*.google.fm/search*
// @match *://*.google.fr/search*
// @match *://*.google.ga/search*
// @match *://*.google.ge/search*
// @match *://*.google.gf/search*
// @match *://*.google.gg/search*
// @match *://*.google.gl/search*
// @match *://*.google.gm/search*
// @match *://*.google.gp/search*
// @match *://*.google.gr/search*
// @match *://*.google.gy/search*
// @match *://*.google.hn/search*
// @match *://*.google.hr/search*
// @match *://*.google.ht/search*
// @match *://*.google.hu/search*
// @match *://*.google.ie/search*
// @match *://*.google.im/search*
// @match *://*.google.iq/search*
// @match *://*.google.is/search*
// @match *://*.google.it/search*
// @match *://*.google.je/search*
// @match *://*.google.jo/search*
// @match *://*.google.kg/search*
// @match *://*.google.ki/search*
// @match *://*.google.kz/search*
// @match *://*.google.la/search*
// @match *://*.google.li/search*
// @match *://*.google.lk/search*
// @match *://*.google.lt/search*
// @match *://*.google.lu/search*
// @match *://*.google.lv/search*
// @match *://*.google.md/search*
// @match *://*.google.me/search*
// @match *://*.google.mg/search*
// @match *://*.google.mk/search*
// @match *://*.google.ml/search*
// @match *://*.google.mn/search*
// @match *://*.google.ms/search*
// @match *://*.google.mu/search*
// @match *://*.google.mv/search*
// @match *://*.google.mw/search*
// @match *://*.google.ne/search*
// @match *://*.google.nl/search*
// @match *://*.google.no/search*
// @match *://*.google.nr/search*
// @match *://*.google.nu/search*
// @match *://*.google.pl/search*
// @match *://*.google.pn/search*
// @match *://*.google.ps/search*
// @match *://*.google.pt/search*
// @match *://*.google.ro/search*
// @match *://*.google.rs/search*
// @match *://*.google.ru/search*
// @match *://*.google.rw/search*
// @match *://*.google.sc/search*
// @match *://*.google.se/search*
// @match *://*.google.sh/search*
// @match *://*.google.si/search*
// @match *://*.google.sk/search*
// @match *://*.google.sm/search*
// @match *://*.google.sn/search*
// @match *://*.google.so/search*
// @match *://*.google.st/search*
// @match *://*.google.td/search*
// @match *://*.google.tg/search*
// @match *://*.google.tk/search*
// @match *://*.google.tl/search*
// @match *://*.google.tm/search*
// @match *://*.google.to/search*
// @match *://*.google.tt/search*
// @match *://*.google.us/search*
// @match *://*.google.vg/search*
// @match *://*.google.vu/search*
// @match *://*.google.ws/search*
// @match *://google.com/search*
// @match *://www.google.com/search*
// @match *://encrypted.google.com/search*
// @exclude ftp://*/*
// @exclude file:///*/*
// @grant none
// ==/UserScript==

(function () {
	'use strict';

	var i,
		d = document,
		span,
		node,
		nodes,
		head = d.head || d.getElementsByTagName('head')[0],
		style,
		position,
		curLoc = window.top.location,
		MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver,
		mutation,
		mutation_config = {
			childList: true,
			subtree: true
		};

	function GM_addStyle(css) {
		if (head) {
			style = d.createElement('style');
			style.type = 'text/css';
			style.textContent = css;
			style.title = 'SE-CSS';
			head.appendChild(style);
			return style;
		}
		return null;
	}

	function getUrlVars() {
		var vars = {},
			parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
				vars[key] = value;
			});
		return vars;
	}

	function forEach(array, callback, scope) {
		for (var i = 0; i < array.length; i++) {
			callback.call(scope, i, array[i]);
		}
	}

	function pNrC(node) {
		for (var i = 0; i < node.length; i++) {
			node[i].innerHTML = '';
			node[i].parentNode.removeChild(node[i]);
		}
	}

	function addPosition(addTo) {
		forEach(d.querySelectorAll(addTo), function (index, e) {
			span = d.createElement('span');
			span.className = 'se-num';
			span.textContent = (position + 1) + '.';
			e.insertBefore(span, e.firstChild);
			position++;
		});
	}

	function ifCacheCleared(key) {
		var sS = sessionStorage.getItem(key);
		switch (sS) {
			case "se-on":
				GM_addStyle('.se-serp-adv-item{display:block !important;}');
				break;
			default:
				GM_addStyle('.se-serp-adv-item{display:none !important;}');
				if (sS === null){
					sessionStorage.setItem(key, 'se-off');
				}
		}
	}

	function yandex_loop() {
		forEach(d.querySelectorAll('.main__top, #search-result'), function (index, e) {
			if (e.querySelectorAll('.serp-item:not(.se-badnode):not(.se-goodnode):not(.se-serp-adv-item)').length > 0) {
				node = e.querySelectorAll('.serp-item');
				for (i = 0; i < node.length; i++) {
					var dfw = node[i].getAttribute('data-fast-wzrd');
					if (dfw !== null && node[i].getAttribute('data-fast-subtype') !== null ||
						dfw !== null && node[i].getAttribute('data-first-snippet') !== null ||
						dfw === 'zen') {
						node[i].className += ' se-badnode';
					} else if (node[i].querySelectorAll('h2 a[data-event-required]').length > 0) {
						node[i].className += ' se-serp-adv-item';
					} else {
						node[i].className += ' se-goodnode';
					}
				}
			}
		});

		position = getUrlVars().p;
		if (position > 0) {
			position = position * d.getElementsByClassName('se-goodnode').length;
		} else {
			position = 0;
		}
		addPosition('.se-goodnode h2');
		ifCacheCleared('directStatus');
	}

	function yandex_switches(parent, toHide, name, title, esp1) {
		var checkboxStatus = '',
			countDirect = '',
			panel = d.createElement('div'),
			getParent = d.querySelectorAll(parent)[0];
		if (name === 'direct'){
			countDirect = ' (' + d.querySelectorAll(".content__left .se-serp-adv-item").length + ')';
			if (sessionStorage.getItem('directStatus') === 'se-on'){
				checkboxStatus = 'checked="" ';
			}
		}
		panel.className = 'se-bar-' + name;
		panel.innerHTML = '<span class="se-checkbox-' + name + esp1 + '">' + title + ': ' +
			'<span class="se-checkbox-on-off">' +
			'<input id="se-checkbox-on-off-' + name + '" ' + checkboxStatus + 'type="checkbox">' +
			'<label><span class="checked"></span><span class="toggle"></span><span class="unchecked"></span></label>' +
			'</span>' + countDirect + '</span>';
		getParent.appendChild(panel);
		var onOff = d.getElementById('se-checkbox-on-off-' + name),
			obj = {
				handleEvent: function() {
					switch (sessionStorage.getItem(name + 'Status')) {
						case "se-on":
							GM_addStyle(toHide + '{display:none !important;}');
							sessionStorage.setItem(name + 'Status', 'se-off');
							break;
						default:
							GM_addStyle(toHide + '{display:block !important;}');
							sessionStorage.setItem(name + 'Status', 'se-on');
					}
					if (name === 'footer'){
						window.top.scrollTo(0, 9999);
					}
				}
			};
		onOff.addEventListener("click", obj, false);
	}

	function yandex() {
		if (curLoc.pathname.indexOf('/tune/geo') >= 0) {
			d.getElementById('city__front-input').select();
			d.getElementsByClassName('geo-map')[0].style = 'display:none !important;';
		} else if (curLoc.hostname.indexOf('news.yandex.') >= 0) {
			GM_addStyle('.yaplus, .sticky_visible, .proffit_visible{display:none !important;}' +
						'.story-item__title{font-size:18px !important;}' +
						'.document__provider-name{color:#c03 !important;}');
		} else if (curLoc.pathname.indexOf('/search/') >= 0 || curLoc.pathname.indexOf('/yandsearch') >= 0) {
			GM_addStyle('.se-num{margin:2px 8px 0 8px;color:#c03;font-weight:700;cursor:default;}' +
						'.se-badnode, .related, .related__hidden, .content .content__right, .wrapper__cell_type_thumb, .ya-chat-widget, .serp-footer__main,' +
						'.yaplus, .yaplus__tooltip, .header-favorites-button, .serp-header .notifier, .Composite-Item:not(:first-child), .showcase{display:none !important;}' +
						'body .main{padding-bottom:10px !important;}' +
						'body .footer{background-color:#555 !important;padding:4px !important;}' +
						'body .serp-header_has-head-stripe_yes{margin:0 !important;}' +
						'.footer .footer__inner{padding:10px !important;}' +
						'.footer .footer__line{line-height:20px !important;}' +
						'.region-change__link, .region-change__link:visited{color:#c03 !important;opacity:1 !important;}' +
						'.region-change__link:hover{color:#000 !important;}' +
						'.content .content__left{width:800px !important;}' +
						'.intents .intents__container{margin:4px 0 0 30px !important;}' +
						'.competitors__link{margin-right:10px !important;}' +
						'.misspell, .serp-item, .se-serp-adv-item, .pager{margin-bottom:12px !important;}' +
						'.serp-list > .serp-item > .composite{margin-bottom:0 !important;}' +
						'.se-bar-direct{display:inline-block;font-size:14px;font-weight:400;text-transform:none;letter-spacing:0;cursor:default;}' +
						'.se-bar-footer{padding-left:17px;}' +
						'.se-bar-footer span{transition:opacity 0.2s ease 0s;}' +
						'.se-checkbox-direct{padding:0 8px;color:#999;}' +
						'.se-checkbox-footer{position:relative;padding-left:26px;font-weight:700;opacity:.45;}' +
						'.se-checkbox-footer:hover{opacity:1 !important;}' +
						'.se-checkbox-on-off{position:relative;display:inline-block;width:35px;height:15px;padding-right:2px;overflow:hidden;vertical-align:text-bottom;}' +
						'.se-checkbox-on-off input[type=checkbox]{position:absolute;margin:0;width:37px;height:15px;opacity:0;cursor:pointer;}' +
						'.se-checkbox-on-off input[type=checkbox]:checked+label{background-color:#090;}' +
						'.se-checkbox-on-off label>*{display:inline-block;height:100%;vertical-align:top;transition:width 0.3s ease 0s;}' +
						'.se-checkbox-on-off label{display:inline-block;border:1px solid transparent;height:13px;width:100%;background-color:#999;border-radius:20px;}' +
						'.se-checkbox-on-off .checked{text-align:center;line-height:13px;}' +
						'.se-checkbox-on-off .checked, .se-checkbox-on-off input[type=checkbox]:checked+label .unchecked{width:0;}' +
						'.se-checkbox-on-off .toggle{background-color:#fff;width:13px;border-radius:13px;}' +
						'.se-checkbox-on-off .unchecked, .se-checkbox-on-off input[type=checkbox]:checked+label .checked{width:22px;}');

			if (d.querySelectorAll('.serp-item:not(.se-badnode):not(.se-goodnode)').length > 0 &&
				d.getElementsByClassName('se-num').length === 0) {
				yandex_loop();
				if (d.getElementsByClassName('se-bar-direct').length === 0) {
					yandex_switches('.navigation__region', '.se-serp-adv-item', 'direct', 'Я.Директ', '');
				}
				if (d.getElementsByClassName('serp-footer__wrapper').length !== 0 && d.getElementsByClassName('se-bar-footer').length === 0) {
					sessionStorage.setItem('footerStatus', 'se-off');
					yandex_switches('.serp-footer__wrapper', '.serp-footer__main', 'footer', 'Footer', ' serp-footer__link');
				}
			}
		}
	}

	function google_loop() {
		forEach(d.querySelectorAll('#res'), function (index, e) {
			if (e.getElementsByClassName('se-num').length === 0) {
				node = e.querySelectorAll('.g.mnr-c.g-blk, #imagebox_bigimages, .g.mod, .g._rk, .g ._rk, .mod .g, .vk_c');
				pNrC(node);
				node = e.getElementsByClassName('g');
				for (i = 0; i < node.length; i++) {
					if (node[i].querySelectorAll('*').length === 0 ||
						node[i].querySelectorAll('.rc .s').length === 0 &&
						node[i].querySelectorAll('.r').length > 0 &&
						node[i].querySelectorAll('.ts').length === 0) {
						node[i].innerHTML = '';
						node[i].parentNode.removeChild(node[i]);
					}
				}
				node = e.querySelectorAll('.g h3 a, .g a h3');
				for (i = 0; i < node.length; i++) {
					if (node[i].tagName === 'H3') {
						node[i].parentNode.target = '_blank';
					} else {
						node[i].target = '_blank';
					}
				}
			}
		});

		position = getUrlVars().start;
		if (position > 0) {
			position = position++;
		} else {
			position = 0;
		}
		addPosition('#res .g');
	}

	function google() {
		GM_addStyle('.se-num{float:left;font-size:17px;margin-left:-40px;color:#c03;font-weight:700;}' +
					'#tads, #tadsb, #rhs, #newsbox, #imagebox_bigimages, #extrares, #lclbox, #tvcap, #flun, #kx, #lud-dsu, #bottomads, .rgsep, ._Mcf, .serptrends_histwrapper, .no-sep, .tpo,' +
					'.kappbar, .vk_c, g-section-with-header, g-scrolling-carousel{display:none !important;}' +
					'.g g-section-with-header{display:block !important;}' +
					'.g{margin-bottom:15px !important;}' +
					'#cnt #center_col{width:850px !important;}' +
					'.s{max-width:848px !important;}');
		if (d.querySelectorAll('.mw #rcnt .g').length > 0) {
			google_loop();
		}
	}

	function mail_loop() {
		forEach(d.querySelectorAll('#js-result'), function (index, e) {
			node = e.getElementsByClassName('result__li');
			nodes = [];
			for (i = 0; i < node.length; i++) {
				if (node[i].classList.length > 1 || node[i].getElementsByClassName('result__title').length === 0) {
					nodes.push(node[i])
				}
			}
		});
		nodes = nodes.concat(Array.from(d.querySelectorAll('#js-bottom-also-looking-queries, #js-topBar > div, #js-bottomBar > section, #js-bottomBar > div')));
		pNrC(nodes);

		position = getUrlVars().sf;
		if (position > 0) {
			position = position++;
		} else {
			position = 0;
		}
		addPosition('.result__li');
	}

	function mail() {
		GM_addStyle('.se-num{float:left;margin-left:8px;margin-right:8px;font-size:18px;color:#c03;font-weight:700;}' +
					'#layout-carousel, .js-container, #js-bottomBlock .ya-block, .yandex-rtb_top, .fuab_bottom, #layout #layout-content #js-topBlock, .result__address, #js-kb-col-right, .responses__pxtRBMail,' +
					'#layout #layout-content .responses > div[class] > div[id] > div[class], #section-web .alqs, .SnippetResultImage-container{display:none !important;}' +
					'.result__li{margin-bottom:4px !important;}' +
					'.layout-content__wrapper{padding-bottom:0px !important;}' +
					'.block-info-serp__url{font-size:15px !important;}' +
					'.result__title{white-space:nowrap !important;}' +
					'.layout-content{padding-bottom:60px !important;}' +
					'.result__microdata_video__img, .result__person__img{margin-right:15px !important;}' +
					'.layout_two-coll .layout-content__wrapper{margin-right:0 !important;}' +
					'.responses{max-width:800px;width:800px !important;}' +
					'.rightcol .layout-content__wrapper{border-right:none;width:800px !important;}');
		mutation = new MutationObserver(function (m) {
			m.forEach(function (m) {
				if (m.addedNodes.length > 0 &&
					m.addedNodes[0].className !== 'se-num' &&
					d.getElementsByClassName('result__li').length > 0 &&
					d.getElementsByClassName('se-num').length === 0) {
					mail_loop();
				}
			});
		});
		mutation.observe(d, mutation_config);
	}

	function rambler() {
		GM_addStyle('.se-num{float:left;margin-right:8px;line-height:25px;font-size:18px;color:#c03;font-weight:500;}' +
					'aside, [class^="Direct__item-"], [class^="Mixin__root-"], [class^="Hints__hints-"], [class^="Addons__widgets-"]{display:none !important;}' +
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
		mutation = new MutationObserver(function (m) {
			m.forEach(function (m) {
				if (m.addedNodes.length > 0 &&
					m.addedNodes[0].className !== 'se-num' &&
					d.querySelectorAll('[class^="LayoutSearch__maincol-"] [class^="Serp__item-"]').length > 0 &&
					d.getElementsByClassName('se-num').length === 0) {
					node = d.querySelectorAll('[class^="LayoutSearch__maincol-"] [class^="Direct__item-"]');
					pNrC(node);
					position = getUrlVars().page;
					if (position > 0) {
						position = --position * d.querySelectorAll('[class^="LayoutSearch__maincol-"] [class^="Serp__item-"]').length;
					} else {
						position = 0;
					}
					addPosition('[class^="LayoutSearch__maincol-"] article h2 a');

				}
			});
		});
		mutation.observe(d, mutation_config);
	}

	function yahoo() {
		GM_addStyle('.se-num{float:left;font-size:18px;line-height:15px;margin:3px 12px 56px 0;color:#c03;font-weight:700;}' +
					'#right, #appFinance, #browserExtensionPromotion, .searchCenterBottomAds, .searchCenterFooter, .appMathCalculator, .f5110t0q65, .dd, .ad_loc_top, .ad_loc_bot{display:none !important;}' +
					'.assist, .wrapstar, .algo, .pagination{display:block !important;}' +
					'.sc, #results #main #web .singlecol.sc.tt.twc, .dd, #results #web .dd, .ddgrp .dd, #results #web .ddgrp .dd, .searchCenterBottom{margin-top:8px !important;}' +
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
		if (d.querySelectorAll('.wrapstar, .algo').length > 0) {
			position = getUrlVars().b;
			if (position > 0) {
				position = --position;
			} else {
				position = 0;
			}
			addPosition('.searchCenterMiddle .wrapstar, .searchCenterMiddle .algo');
		}
	}

	function bing() {
		GM_addStyle('.se-num{margin-right:8px;color:#c03;font-weight:500;}' +
					'.b_ad, .b_ans{display:none !important;}' +
					'#b_results{width:700px;}' +
					'#b_results>li{margin:0;}' +
					'#b_content{padding:41px 0 0 100px;}' +
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
		addPosition('.b_algo h2');
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
		if (d.querySelectorAll('.b-content-center .b-result').length > 0) {
			node = d.querySelectorAll('.js-widget-currency, .js-widget-news, .js-widget-pics, .js-widget-video, .js-widget-weather, .js-widget-movie');
			pNrC(node);
			position = getUrlVars().from;
			if (position > 0) {
				position = --position;
			} else {
				position = 0;
			}
			addPosition('.b-result');
		}
	}

	switch (true) {
		case curLoc.hostname.indexOf('yandex.') >= 0 &&
			curLoc.pathname.indexOf('/tune/geo') >= 0 ||
			curLoc.pathname.indexOf('/yandsearch') >= 0 ||
			curLoc.pathname.indexOf('/search/') >= 0 &&
			curLoc.pathname.indexOf('/search/customize') === -1:
			yandex();
			break;
		case curLoc.hostname.indexOf('google.') >= 0 &&
			curLoc.href.indexOf('&tbm=isch') === -1:
			google();
			break;
		case curLoc.hostname.indexOf('go.mail.ru') >= 0:
			mail();
			break;
		case curLoc.hostname.indexOf('rambler.') >= 0:
			rambler();
			break;
		case curLoc.hostname.indexOf('yahoo.') >= 0:
			yahoo();
			break;
		case curLoc.hostname.indexOf('bing.') >= 0:
			bing();
			break;
		case curLoc.hostname.indexOf('sputnik.') >= 0:
			sputnik();
			break;
	}
})();
