$(document).ready(function(){
    let controls = {
        video: $(".video__main"),
        playpause: $(".video__play-btn"),
        progress: $(".video__progress"),
        fullscreen: $(".video__fullscreen-btn"),
        
        togglePlayback: function() {
            (video.paused) ? video.play() : video.pause();
        }
    };

    let video = controls.video[0];

    controls.playpause.click(function(){
        controls.togglePlayback();
    });
    controls.video.click(function(){
        controls.togglePlayback();
    });

});





