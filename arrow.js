!function () {

    $footer=$('footer')
    $footer.on('mouseenter',function () {
        $('footer .icon').show()
    })
    $footer.on('mouseleave',function () {
        $('footer .icon').hide()
    })

/*    $left = $('.arrow-left')
    $left.on('click', function (e) {
        let x = -400px
        $('.channels').css({transform: 'tranlateX({x})'})
    })*/
}.call()