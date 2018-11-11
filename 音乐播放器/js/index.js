var oAudio = document.getElementById('audio'),
    oCurrentTime = document.getElementsByClassName('current-time')[0],
    oAllTime = document.getElementsByClassName('all-time')[0],
    oBtn = document.getElementsByClassName('btn')[0],
    oRadioBox = document.getElementsByClassName('radio-box')[0],
    oProActive = document.getElementsByClassName('pro-active')[0],
    oIsPlay = oBtn.getElementsByClassName('iconfont')[0],
    oVolume = document.getElementsByClassName('volume')[0],
    oIsVolume = oVolume.getElementsByClassName('iconfont')[0],
    oVolbox = document.getElementsByClassName('volbox')[0],
    oProBox = document.getElementsByClassName('pro-box')[0];
var timer,
    duration,
    bgWidth = 232;//提出作用域。
    
    //ondurationchange资源是互联网资源使用这个
window.onload = function () {
    oCurrentTime.innerHTML = conversion(0);
    duration = oAudio.duration;
    oAllTime.innerHTML = conversion(duration);
}
//00:00
function conversion(time) {
    var sec = parseInt(time%60) < 10 ? '0' + parseInt(time%60) : parseInt(time%60);
    var min = parseInt(time/60) <10 ? '0' + parseInt(time/60) : parseInt(time/60);
    return min + ':' + sec;
}
//设置播放暂停按钮；
oBtn.onmouseup = function () {
    if(oAudio.paused) {
        musicPlay();
    }else {
        musicPause();
    }
}
function musicPlay() {
        oAudio.play();
        oIsPlay.className = 'iconfont icon-iconstop';
        timer = setInterval(movePro,200);
}
function musicPause() {
        oAudio.pause();
        oIsPlay.className = 'iconfont icon-bofang';
        clearInterval(timer);
}
function movePro() {
    var currentTime = oAudio.currentTime;
    oCurrentTime.innerHTML = conversion(currentTime);
    oProActive.style.width = currentTime/duration * bgWidth + 8 + 'px';
}
//结束播放后重新播放
oAudio.onended = function () {
    musicPause()//先暂停。
    oAudio.currentTime = 0;//音乐的初始时间回归到0.
    oCurrentTime.innerHTML = conversion(0);//显示的音乐的初始时间回归到0.
    oProActive.style.width = 8 + 'px';//宽度回到起始点。
    musicPlay()//再播放。
}
oRadioBox.onmousedown = function () {
    clearInterval(timer);
    var c = oAudio.currentTime;
    document.body.onmousemove = function (e) {
        var newWidth = e.clientX - oProBox.getBoundingClientRect().left;
        if(newWidth < 8) {
            newWidth = 8;
        }else if(newWidth > 240){
            newWidth = 240;
        }
        oProActive.style.width = newWidth + 'px';
        c = (newWidth-8)/bgWidth * duration;
        oCurrentTime.innerHTML = conversion(c);
    }
    document.body.onmouseup = function () {
        document.body.onmousemove = null;
        document.body.onmouseup = null;
        musicPlay();
        oAudio.currentTime = c;
    }
}

oVolume.onclick = function() {
    if(oIsVolume.className == 'iconfont icon-yinliangdaxiao'){
        oIsVolume.className = 'iconfont icon-jingyin';
        oAudio.volume = '0';
    }
    else if(oIsVolume.className == 'iconfont icon-jingyin'){
        oIsVolume.className = 'iconfont icon-yinliangdaxiao';
        oAudio.volume = '1';
    }
}
oVolume.onmousemove = function(){
    if(oVolume.onmouseover){
        oVolbox.style = 'display: none;';
    }
    // else if(oVolume.onmouseout) {
    //     oVolbox.style = 'display: none;';
    // }
    else{
        oVolbox.style = ' ';
    }
//     // oVolbox.style.clear
}