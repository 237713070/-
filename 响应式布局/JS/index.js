var gnMore = document.getElementsByClassName('gn-more')[0],
    gnList = document.getElementsByClassName('gn-list')[0];

gnMore.onclick = function () {
    if(document.getElementsByClassName('gn-list-active')[0]) {
        gnList.classList.remove('gn-list-active');
    }else{
        gnList.classList.add('gn-list-active');
    }
}