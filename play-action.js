!function () {
    $button=$('.state-1 main .left .action>svg')
    $button.eq(2).on('click',function () {
        $button[2].classList.add('hidden')
        $button[3].classList.remove('hidden')
    })
    $button.eq(3).on('click',function () {
        $button[3].classList.add('hidden')
        $button[2].classList.remove('hidden')
    })


}.call()