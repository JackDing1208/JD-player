!function () {
    var audio = new Audio()
    var selectedChannel = ''
    var selectedChannelName = ''
    var song = {}
    audio.autoplay = true


    $.ajax({
        url: 'http://api.jirengu.com/fm/getChannels.php',
        method: 'get'
    }).done(function (x) {
            let info = JSON.parse(x)
            let channels = info.channels
            channels.forEach((value) => {
                let channel = $('<div></div>')
                    .addClass('channel')
                    .attr("channel-id", value.channel_id)
                    .attr("channel-name", value.name)
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
                selectedChannel = ($currentChannel[0].attributes[1].value)
                selectedChannelName = ($currentChannel[0].attributes[2].value)
                console.log(selectedChannel)
                songSwitch(selectedChannel)
            })



            var songSwitch = function (selectedChannel) {
                $.getJSON('//jirenguapi.applinzi.com/fm/getSong.php', {channel: selectedChannel})
                    .done(function (x) {
                        song = x.song[0]
                        console.log(song)
                        audio.src = song.url
                        $('.right>.tagName')[0].innerText = selectedChannelName
                        $('.right>h1')[0].innerText = song.title
                        $('.right>h2')[0].innerText = song.artist
                    })
            }


        }
    )


}.call()