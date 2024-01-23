// ==UserScript==
// @name         BiliFix
// @namespace    http://https://github.com/SchwarzXia/
// @version      0.02
// @description  Bilibili auto jump to video page
// @author       DarkFlow
// @match        *://*.bilibili.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bilibili.com
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';
    if(window.location.href.includes("?bvid=")===true){
        window.location.replace(window.location.href.substring(0, window.location.href.indexOf('&')).replace('?bvid=', 'video/'));
    }
})();
