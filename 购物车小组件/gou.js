var value = 1;
var max = 20;
function notIn(){
    if(value <= 1){
        $('.jian').addClass('min');
        $('.jia').removeClass('min');
    }else if(value >= max){
        $('.jia').addClass('min');
    }else{
        $('.min').removeClass('min')
    }
}
    notIn();

$('input').on('input', function() {
    cont(0);
    notIn();
})

// $('.text').on('input', function() {
//     value = perseInt(this.value);
//     if(value > max){
//         value = max;
//     }else if(value >= 1 && value <= max){
//         value = parseInt(this.value);
//     }else{
//         value = 1;
//     };
//     $(this).val(value);
//     notIn();
// })   书写错误删除


function cont(num){
    
    value = parseInt($('.text').val()) + num;
    if(value <= 1 || isNaN(value)){
        value = 1;
    }else if(value >= max){
        value = max;
    }
    $('.text').val(value);
}

// $('.num-box').find('.jian').click(function(){
//     // console.log('22')
//     cont(-1);
//     notIn();
// }).end().find('.jia').click(function(){
//     // console.log('111')
   
// })
$('.jian').add('.jia').click(function() {
    if($(this).hasClass('jian')) {
        cont( -1 );
    }else {
        cont( 1 );
    }
    notIn();
})