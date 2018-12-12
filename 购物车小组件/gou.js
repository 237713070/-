var value = 1;
$('.num-box').find('.jian').click(function(){
    // console.log('22')
    value = value - 1;
    $('.num-pre').val(value);
}).end().find('.jia').click(function(){
    // console.log('111')
        value = value + 1;
        $('.num-pre').val(value);
    }
)