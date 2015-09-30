var d = document, n = NodeList.prototype, a = Array.prototype;
var $ = d.querySelector.bind(d);
var $$ = d.querySelectorAll.bind(d);

n.forEach = a.forEach;
n.map = a.map;