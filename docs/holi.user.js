// ==UserScript==
// @name         Motyw Holidays
// @version      1.0
// @description  Motyw Świąteczny
// @author       Wasyl Tergaris
// @updateURL    https://erenw146.github.io/MargoCSS/holi.user.js
// @match        http://*.margonem.pl/*
// @match        http://*.margonem.com/*
// @grant        none
// @run-at       document-start
// ==/UserScript==
var element = document.createElement("link");
element.setAttribute("rel", "stylesheet");
element.setAttribute("type", "text/css");
element.setAttribute("href", "https://erenw146.github.io/MargoCSS/holi.css");
document.head.appendChild(element);