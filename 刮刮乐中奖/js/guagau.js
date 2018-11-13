var myCanvas = document.getElementById('myCanvas');
var ctx = myCanvas.getContext('2d');
var w = myCanvas.width;
var h = myCanvas.height;

function init() {
    var img = new Image();
    var random = Math.random();
    if(random < 0.1) {
        img.src = './img/dilireba.jpg';
    }
    else {
        img.src = '.ruhua.jpeg';
    }
    img.onload = function() {
        myCanvas.style.backgroundImage = 'url('+ img.src +')';
        myCanvas.addEventListener('mousedown', downFun);
    }
    ctx.beginPath();
    ctx.fillStyle = '#aaa' ;
    ctx.fillRect(0, 0, w, h);
    ctx.globalCompositeOperation = 'destination-out';
}
init();

function downFun(e) {
    var x = e.clientX - myCanvas.offsetLeft;
    var y = e.clientY - myCanvas.offsetTop;
    ctx.beginPath();
    ctx.arc(x, y, 20, 0,    Math.PI*2);
    ctx.closePath();
    ctx.fill();
}