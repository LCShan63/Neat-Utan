// ==UserScript==
// @author Paranoid120
// @description Preventive efforts to limit Bilibili P2P connections.
// @downloadURL https://raw.githubusercontent.com/LCShan63/Neat-Utan/Archive/TamperMonkey/Bilibili_WebRTC_Annihilator.user.js
// @grant None
// @homepage https://bbs.nga.cn/
// @icon https://static.hdslb.com/images/favicon.ico
// @include /https?:\/\/live\.bilibili\.com\/(blanc\/)?\d+\??.*/
// @include /https?:\/\/live\.bilibili\.com\/?\??.*/
// @include /https?:\/\/live\.bilibili\.com\/\d+\??.*/
// @license GNU General Public License Version 3.0
// @name Bilibili WebRTC Annihilator
// @namespace https://lcshan63.github.io/
// @run-at Document-End
// @supportURL https://nga.178.com/read.php?tid=25285579
// @updateURL https://github.com/LCShan63/Neat-Utan/raw/Archive/TamperMonkey/Bilibili_WebRTC_Annihilator.user.js
// @version 1.00
// ==/UserScript==

const funcs = [
    'RTCPeerConnection',
    'mozRTCPeerConnection',
    'webkitRTCPeerConnection',
    'RTCDataChannel',
    'DataChannel',
];
const clear = () => {
    console.info("P2P functions suppressed!");
    for (const i in funcs) {
        const fname = funcs[i];
        if (window[fname] !== undefined) {
            console.warn(`${fname} has been purged!`);
            delete window[fname]
        }
    }
};
const interval = 90;
(function() {
    clear();
    setInterval(clear, interval * 1000);
})();
