if($(document).clientWidth<'400px'){
    $(document).clientWidth='400px';
}
$(function(){
    // alert($('#center').width());
    $('.taobao,.fashion,.diy,.health').mouseenter(function(){
        $(this).parents('li').addClass('active');
    })
    $('.taobao,.fashion,.diy,.health').mouseleave(function(){
        $(this).parents('li').removeClass('active');
    })

    //二维码
    $('.share .wxm').mouseenter(function(){
        $('.weixinma').show()
    })
    $('.share .wxm').mouseleave(function(){
        $('.weixinma').hide()
    })
    $('.share .wtm').mouseenter(function(){
        $('.weitaoma').show()
    })
    $('.share .wtm').mouseleave(function(){
        $('.weitaoma').hide()
    })
    var h=$('.hi');
    var oBtn=$('.button')
    oBtn.click(function(){
       h.toggleClass('active')
    })

})
