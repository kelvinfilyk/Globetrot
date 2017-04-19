window.requestAnimationFrame = window.requestAnimationFrame
    || window.mozRequestAnimationFrame
    || window.webkitRequestAnimationFrame
    || window.msRequestAnimationFrame
    || function(f){return setTimeout(f, 1000/60)} // simulate calling code 60

window.cancelAnimationFrame = window.cancelAnimationFrame
    || window.mozCancelAnimationFrame
    || function(requestID){clearTimeout(requestID)} //fall back

var canvas=document.getElementById('canvas1');
var ctx = canvas.getContext("2d");
ctx.font = "10px Arial";
var points=[];
var width = canvas.width;
var height = canvas.height;


function init() {
  /*
  canvas.addEventListener("mouseover", function (e) {
		findxy4('over', e)
	}, false);
	canvas.addEventListener("mousemove", function (e) {
		findxy4('move', e)
	}, false);
	canvas.addEventListener("mousedown", function (e) {
		findxy4('down', e)
	}, false);
	canvas.addEventListener("mouseup", function (e) {
		findxy4('up', e)
	}, false);
	canvas.addEventListener("mouseout", function (e) {
		findxy4('out', e)
	}, false);
  */

  ctx.fillStyle="#000000";

  ctx.fillRect(0,0,600,600);
  ctx.fillStyle="#323232";
  ctx.fillRect(0,0,500,500);

}
