!function () {

    let $footer = $('footer')
    $footer.on('mouseenter', function () {
        $('footer .icon').show()
    })
    $footer.on('mouseleave', function () {
        $('footer .icon').hide()
    })

    let $left = $('.arrow-left')
    let x = 381   //起始位置
    let y = 66    //每次移动距离
    $left.on('click', function (e) {
        x = x+y
        if(x>763){x=763}  //要根据实际宽度计算确定
        $('.channels').css({transform: 'translateX(-' + x + '%)'})
    })


    let $right = $('.arrow-right')
    $right.on('click', function (e) {
        x= x-y
        if(x<0){x=0}
        $('.channels').css({transform: 'translateX(-' + x + '%)'})
    })


}.call()