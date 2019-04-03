var audio = new Audio()
var selectedChannel = ''
var selectedChannelName = ''
var song = {}

audio.autoplay = false
audio.loop = false


init = function () {
    $.ajax({
        url: '//api.jirengu.com/fm/getChannels.php',
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
        let random = Math.round(Math.random() * ($channel.length - 1))
        $channel.on('click', function (e) {
            let $currentChannel = $(e.currentTarget)
            $currentChannel.addClass('active')
                .siblings().removeClass('active')
            selectedChannel = ($currentChannel[0].attributes[1].value)
            selectedChannelName = ($currentChannel[0].attributes[2].value)
            songSwitch(selectedChannel)
        })
        initPlay($channel,random)
    })
}
init()


$button = $('main .left .action>svg')
$button.eq(0).on('click', function () {
    $button.eq(0).addClass('hidden')
    $button.eq(1).removeClass('hidden')
    audio.loop = true
})

$button.eq(1).on('click', function () {
    $button.eq(1).addClass('hidden')
    $button.eq(0).removeClass('hidden')
    audio.loop = false
})

$button.eq(2).on('click', function () {
    audio.play()
})
$button.eq(3).on('click', function () {
    audio.pause()
})
$button.eq(4).on('click', function () {
    songSwitch(selectedChannel)
})


audio.addEventListener('playing', function(){
    let duration=audio.duration
    $button.eq(2).addClass('hidden')
    $button.eq(3).removeClass('hidden')
})

audio.addEventListener('pause', function(){
    $button.eq(3).addClass('hidden')
    $button.eq(2).removeClass('hidden')
})




var initPlay=function(channel,random){
    channel.eq(random).trigger('click')
    audio.autoplay = true
}


var songSwitch = function (selectedChannel) {
    $.getJSON('//jirenguapi.applinzi.com/fm/getSong.php', {channel: selectedChannel})
        .done(function (x) {
            song = x.song[0]
            console.log(song)
            audio.src = song.url
            $('.right>.tagName')[0].innerText = selectedChannelName
            $('.right>h1')[0].innerText = song.title
            $('.right>h2')[0].innerText = song.artist
            $('.left>figure').eq(0).css("background-image", "url(" + song.picture + ")")
        })
}

