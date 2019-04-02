!function () {
    $.ajax({
        url: 'http://api.jirengu.com/fm/getChannels.php',
        method: 'get'
    }).done(function (x) {
            let info = JSON.parse(x)
            let channels = info.channels
            channels.forEach((value) => {
                let channel = $('<div></div>')
                    .addClass('channel')
                $('.channels').append(channel)
                let title = $('<h3></h3>')
                    .innerText = value.name
                let img = document.createElement('img')
                img.src = value.cover_small
                channel.append(img)
                channel.append(title)
            })
            let $channel = $('.channel')
            $channel.on('click', function (e) {
                let $currentChannel = $(e.currentTarget)
                $currentChannel.addClass('active')
                    .siblings().removeClass('active')
            })
        }
    )




}.call()