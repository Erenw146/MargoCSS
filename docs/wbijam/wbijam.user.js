// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://wbijam.pl/
// @grant        none
// @require http://code.jquery.com/jquery-3.4.1.min.js
// ==/UserScript==
// ==/UserScript==
var element = document.createElement("link");
element.setAttribute("rel", "stylesheet");
element.setAttribute("type", "text/css");
element.setAttribute("href", "https://erenw146.github.io/MargoCSS/wbijam/styl.css");
document.head.appendChild(element);

var div = document.createElement('div');
document.body.appendChild(div);
div.className = 'menuxd';
div.innerHTML = '<section><nav><ul><li><a href="https://drstone.wbijam.pl/">Dr.Stone</a></li><li><a href="https://rezero.wbijam.pl/">Re:Zero</a></li><li><a href="https://slime.wbijam.pl/">Slime</a></li><li><a href="https://blackclover.wbijam.pl/">Black Clover</a></li><li><a href="https://jujutsu.wbijam.pl/">Jujutsu Kaisen</a></li><li><a href="https://naruto.wbijam.pl/">Boruto</a></li><li><a href="https://snk.wbijam.pl/">Atak Tytanów</a></li><li></nav></section>';