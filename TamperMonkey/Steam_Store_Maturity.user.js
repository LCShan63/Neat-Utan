// ==UserScript==
// @author Dogfight360
// @description Steam store mature content consent.
// @downloadURL https://raw.githubusercontent.com/LCShan63/Neat-Utan/Archive/TamperMonkey/Steam_Store_Maturity.user.js
// @grant None
// @homepage https://www.dogfight360.com/blog/
// @icon https://help.steampowered.com/favicon.ico
// @license GNU General Public License Version 3.0
// @match http*://store.steampowered.com/
// @name Steam Store Maturity
// @namespace https://lcshan63.github.io/
// @supportURL https://keylol.com/t478344-1-1
// @updateURL https://github.com/LCShan63/Neat-Utan/raw/Archive/TamperMonkey/Steam_Store_Maturity.user.js
// @version 1.00
// ==/UserScript==

(function() {
    document.cookie="birthtime=-729000000"
    document.cookie="lastagecheckage=1-January-1900"
    document.cookie="mature_content=1"
    document.cookie="wants_mature_content=1"
})();
