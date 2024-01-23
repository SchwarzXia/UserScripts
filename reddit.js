// ==UserScript==
// @name         Reddit *New* UI
// @namespace    http://https://github.com/SchwarzXia/
// @version      0.1
// @description  Reverting reddit to "new" UI
// @author       DarkFlow
// @match        *://*.reddit.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @grant        none
// @run-at       document-start
// ==/UserScript==

if(window.location.href.indexOf('www.reddit.com') > -1){
    window.location.replace(window.location.toString().replace('www', 'new'));
}
