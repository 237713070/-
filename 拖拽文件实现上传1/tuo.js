var content = document.getElementsByClassName("content")[0];
var val = document.getElementsByClassName("val")[0];
var text = document.getElementsByClassName("text")[0];
var file,
    step = 1024*1024,
    total,
    reader = new FileReader(),
    loaded = 0;/*已经上传了多少*/

content.addEventListener('dragover', function (e) {
    e.preventDefault();//取消dragover默认事件//
});
content.addEventListener('drop', function (e) {
    e.preventDefault();
    file = e.dataTransfer.files[0];/*获取文件*/
    total = file.size;
    // console.log(file.size);
    readBlob(reader, 0, step);
    bindEvent();
    console.log("hhh");
});
/*读取文件*/
function readBlob(reader, start, step) {
    /*读取文件数据*/
    /*分析浏览器是否支持分段上传*/
    if(file.slice) {
        var blob = file.slice(start, start+step);
    }else {
        var blob =file;
    }
    reader.readAsText(blob);
}
function bindEvent(){
    reader.onprogress = function(e) {
        onProgress(e.loaded);
        console.log("kkk");
    }
    reader.onload = function (e) {
        
    }
}
function onProgress(num) {
    loaded += num;
    var per =loaded/total;
    val.style.width = per * 250 + 'px';/*计算滚动条变化*/
    text.innerHTML = Math.round(per * 100) + '%';/*计算百分比*/
    console.log("kkk");
}