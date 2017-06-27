// ==UserScript==
// @name YouTube Search Results Video URL as Text
// @namespace youtube-sr-video-url-as-text
// @description Дополнение поисковой выдачи YouTube ссылкой (в виде текста) на видео ролик. Полезен исключительно для пользователей системы продвижения сайтов - userator.ru
// @version 1.0.1
// @author Eric Draven
// @updateURL https://github.com/Eric-Draven/userscripts/raw/master/youtube-sr-urls-as-text/youtube-sr-video-url-as-text.meta.js
// @downloadURL https://github.com/Eric-Draven/userscripts/raw/master/youtube-sr-urls-as-text/youtube-sr-video-url-as-text.user.js
// @homepageURL https://github.com/Eric-Draven/userscripts/tree/master/youtube-sr-urls-as-text
// @require https://code.jquery.com/jquery-3.2.1.slim.min.js
// @include https://www.youtube.com/*
// @match https://www.youtube.com/*
// @grant GM_addStyle
// ==/UserScript==

(function () {
    if (location.hostname != "www.youtube.com") {
        return;
    }

    var youtubeURL = window.location.origin,
        posterH = $('.yt-lockup-movie-vertical-poster').height() + 53;
    GM_addStyle("#results .yt-lockup-tile {padding:10px 15px 20px 15px !important;}" +
                ".yt-lockup-movie-vertical-poster {height:" + (posterH) + "px !important;}" +
                ".yt-lockup-movie-vertical-poster .yt-lockup-movie-top-content {height:90% !important;}" +
                ".yt-lockup-movie-vertical-poster .yt-lockup-movie-bottom-content {height:10% !important;}" +
                ".script-video-url {margin-top:7px;padding-top:7px;margin-bottom:10px;color:#ca0000;border-top:1px dashed #444;font-size:13px;}");

    window.blocks = function () {
        if (!$('.yt-lockup .yt-lockup-content[class*="script-video-url-goodblock"]').length && $(".yt-lockup .yt-lockup-content .yt-lockup-title a").length) {
            $(".yt-lockup .yt-lockup-content").addClass("script-video-url-goodblock");
            $(".script-video-url-goodblock").each(function () {
                var titleURL = $(this).find(".yt-lockup-title a").attr("href");
                if ( (titleURL === undefined) || (titleURL.indexOf("/watch?") == -1) ) {
                    return;
                } else {$(this).append("<div class='script-video-url'>" + (youtubeURL + titleURL) + "</div>");
                       }
            });
        }
    };
    window.addEventListener('DOMNodeInserted', blocks, false);
    blocks();
})();
