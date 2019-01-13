$('.add').click(function(){
    $('.hide').add('.box').css( 'display','block');
})
// clear();
// function clear(){
//     if($('input').val() !== ''){
//         $('.box .ok').click(function(){
//             console.log('1111')
//             $('ul').append('<li>' + $('input').val() + '</li>')
//             $('.hide').add('.box').css( 'display','none');
//             $('.box input').val(' ');
//         })
//     }else{
//          // 不执行append
//     }
// }
$('.ok').click(function(){
    if($('input').val() != ''){
        $('ul').append('<li>' + $('input').val() + '</li>')
        $('.hide').add('.box').css( 'display','none');
        $('input').val('');
    }else{
        // 不执行append
        $('.hide').add('.box').css( 'display','none');
        $('input').val('');
    }
    
})
$('.clear').click(function(){
    $('ul').html('');
})