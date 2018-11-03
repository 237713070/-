var tips = document.getElementById("tips").getElementsByTagName("li")
console.log(tips);
var lists = document.getElementById("lists").getElementsByTagName("ul");
console.log(lists);
for(var i = 0; i< tips.length; i++){
   tips[i].onclick = showlist;
}
function showlist(){
    for(var i = 0; i< tips.length; i++){
        if( tips[i] === this){
            tips[i].className = "active";
            lists[i].className = "active";
        }else {
            tips[i].className=" ";
            lists[i].className = " ";
        }
    }
}