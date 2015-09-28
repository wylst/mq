var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

NodeList.prototype.forEach = Array.prototype.forEach;
NodeList.prototype.map = Array.prototype.map;
