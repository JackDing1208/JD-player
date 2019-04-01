!function () {
    $.ajax({
        url: 'http://api.jirengu.com/fm/getChannels.php',
        method:'get'
    }).done(function(x) {
        let info=JSON.parse(x)
        let channels=info.channels
        console.log(channels)
        channels.forEach(function (value) {
            let channel=document.createElement('div')
            channel.className='swiper-slide'
            $('.swiper-wrapper').append(channel)
            let style=document.createElement('h3')
            let img=document.createElement('img')
            channel.append(img)
            channel.append(style)
            img.src=value.cover_small
            style.innerText=value.name


        })
    })
}.call()
