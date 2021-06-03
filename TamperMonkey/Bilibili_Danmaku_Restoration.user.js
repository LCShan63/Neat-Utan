// ==UserScript==
// @author Xfgryujk
// @description Restorative efforts to bring back live comments in Bilibili.
// @downloadURL https://raw.githubusercontent.com/LCShan63/Neat-Utan/Archive/TamperMonkey/Bilibili_Danmaku_Restoration.user.js
// @grant None
// @homepage https://ngabbs.com/
// @icon https://www.bilibili.com/favicon.ico
// @include /https?:\/\/live\.bilibili\.com\/(blanc\/)?\d+\??.*/
// @include /https?:\/\/live\.bilibili\.com\/?\??.*/
// @include /https?:\/\/live\.bilibili\.com\/\d+\??.*/
// @license GNU General Public License Version 3.0
// @name Bilibili Danmaku Restoration
// @namespace https://lcshan63.github.io/
// @require https://cdn.jsdelivr.net/gh/google/brotli@5692e422da6af1e991f9182345d58df87866bc5e/js/decode.js
// @require https://cdn.jsdelivr.net/npm/pako@2.0.3/dist/pako_inflate.min.js
// @require https://greasyfork.org/scripts/417560/code/bliveproxy.js?version=931022
// @run-at Document-Start
// @supportURL https://nga.178.com/read.php?tid=27032200
// @updateURL https://github.com/LCShan63/Neat-Utan/raw/Archive/TamperMonkey/Bilibili_Danmaku_Restoration.user.js
// @version 1.00
// ==/UserScript==

(function () {
    bliveproxy.addCommandHandler('DANMU_MSG', command => {
        let params = command.cmd.split(':')
        if (params.length > 4) {
            params[4] = '0'
            command.cmd = params.join(':')
        }
    })
})();
