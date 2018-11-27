function FileLoader(file,events) {
    this.file = file;
    this.total = file.size;
    this.step = 1024 * 1024;
    this.reader = new FileReader();
    this.loaded = 0;
    this.events = events;
    this.readBlob(this.reader, 0, this.step);
    this.bindEvent();
}


FileLoader.prototype = {
    /*读取文件*/
    readBlob:function (reader, start, step) {
        var file = this.file;
        var reader = this.reader;
        /*读取文件数据*/
        /*分析浏览器是否支持分段上传*/
        if(file.slice) {
            var blob = file.slice(start, start+step);
        }else {
            var blob =file;
        }
        reader.readAsText(blob);
    },
    bindEvent:function (){
        var reader = this.reader;
        var _this =this;//找准对象
        reader.onprogress = function(e) {
            _this.onProgress(e.loaded);
        }
        reader.onload = function () {
            _this.onLoad();
        }
    },
    onProgress: function (num) {
        this.loaded += num;
        var per =this.loaded/this.total;
        if(per > 1){
            per = 1;
        }
        this.events.progressIng(per);
    },
    onLoad:function (){
        var result = this.reader.result;
        this.events.stepLoad(this.loaded);
    
        if(this.loaded < this.total){
            this.readBlob(this.reader, this.loaded, this.step);
        }else{
            this.events.finish();
        }
    }
}





