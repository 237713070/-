var myCanvas = document.getElementById('myCanvas');
var ctx = myCanvas.getContext('2d');
var w = myCanvas.width;
var h = myCanvas.height;
var lastPos = {};

//把图片设置进canvas背景中去，但不画进canvas中。
function init() {
    var img = new Image();
    var random = Math.random();
    //设置概率
    if(random < 0.1) {
        img.src = './img/dilireba.jpg';
    }
    else {
        img.src = './img/ruhua.jpeg';
    }
    //设置等图片加载完成后才能刮
    img.onload = function() {
        //把图片插入到canvas背景中
        myCanvas.style.backgroundImage = 'url('+ img.src +')';
        myCanvas.addEventListener('mousedown', downFun);
    }
    ctx.beginPath();//开辟新的路径
    ctx.fillStyle = '#aaa' ;//填充颜色
    ctx.fillRect(0, 0, w, h);//画个矩形
    ctx.globalCompositeOperation = 'destination-out';//组合图形中设置新图形覆盖旧图形
}
init();
function downFun(e) {
    lastPos.x =  e.clientX - myCanvas.offsetLeft;//获取最后点的x，y
    lastPos.y = e.clientY - myCanvas.offsetTop;
    //在点击一下的情况下设置圆点
    ctx.beginPath();//开辟新的路径
    ctx.arc(lastPos.x, lastPos.y, 20, 0, Math.PI*2);//设置画圆的位置，大小，形状
    ctx.closePath();//闭合路径
    ctx.fill();//填充画

    myCanvas.addEventListener('mousemove', moveFun);
    document.body.addEventListener('mouseup', upFun);
}

function moveFun(e) {
    var x = e.clientX - myCanvas.offsetLeft;//获取新圆的位置
    var y = e.clientY - myCanvas.offsetTop;
    ctx.beginPath();//开辟新的路径
    ctx.moveTo(lastPos.x, lastPos.y);//将画笔挪到旧圆位置
    ctx.lineTo(x, y);//画笔划线画到新圆位置
    ctx.lineWidth = 40;//线大小
    ctx.lineCap = 'round';//线头形状设置成圆角
    ctx.stroke();//描边画
    lastPos.x = x;//保存旧圆位置供下次点击提供定位
    lastPos.y = y;
}
function upFun() {
    myCanvas.removeEventListener('mousemove', moveFun);
    document.body.removeEventListener('mouseup',upFun);
    clearCover();
}
//设置当刮开部分超过70%的时候所有画布清除
function clearCover() {
    var imageData = ctx.getImageData(0, 0, w, h);
    var sum = 0;
    for(var i =0; i < imageData.data.length; i+=4) {
        if(imageData.data[i] == 0){
            sum++;
        }
    }
    if(sum > w*h*0.7) {
        ctx.clearRect(0, 0, w, h);
    }
}