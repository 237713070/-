var content = document.getElementsByClassName("content")[0];
var val = document.getElementsByClassName("val")[0];
var text = document.getElementsByClassName("text")[0];


content.addEventListener('dragover', function (e) {
    e.preventDefault();//取消dragover默认事件//
});
content.addEventListener('drop', function (e) {
    e.preventDefault();
    file = e.dataTransfer.files[0];/*获取文件*/
    // total = file.size;
    // console.log(file.size);
    var loader = new FileLoader(file,events);//调用组件
    // readBlob(reader, 0, step);//读取文件
    // bindEvent();//监听文件
});

var events = {
    progressIng: function (per) {
        val.style.width = per * 250 + 'px';/*计算滚动条变化*/
        text.innerHTML = Math.round(per * 100) + '%';/*计算百分比*/
    },
    stepLoad: function (loaded) {
        console.log('上传' + loaded + '部分');
    },
    finish: function(){
        console.log('上传完毕');
    }
}

