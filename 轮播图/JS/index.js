var index = 0,
    num = 5,
    imgwidth = 590,
    timer = undefined;

timerFun()
function move(val){
    clearTimeout(timer)
    $('.img-box').stop( false , true );
    if( val == 'prev'){
        index--;
        if(index < 0){
            $('.img-box').css({
                left: num * -imgwidth
            })
            index = 4;
        }
    }else if(val == 'next'){
        index++;
        if(index > num){
            $('.img-box').css({
                left: 0
            })
            index = 1;
        }
    }
    $('.img-box').animate({
        left: index * -imgwidth
    },function(){
        timerFun();
    });
    active($('.item').eq(index == 5 ? 0 : index));
}
function timerFun(){
    timer = setTimeout(function(){
        move('next');
    },3000)
}

function active(dom){
    $('.active').removeClass('active');
    $(dom).addClass('active');
}
$('.prevBtn').click(function(){
    move('prev')
    // index--;
    // $('.img-box').animate({
    //     left: index * -imgwidth
    // })
});
$('.nextBtn').click(function(){
    move('next')
    // index++;
    // $('.img-box').animate({
    //     left: index * -imgwidth
    // })
});
$('.item').click(function(){
    index = $(this).index();
    // active($(this));
    move('');
});