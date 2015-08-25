$(document).ready(function(){
  //var description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id tortor nisi. Aenean sodales diam ac lacus elementum scelerisque. Suspendisse a dui vitae lacus faucibus venenatis vel id nisl. Proin orci ante, ultricies nec interdum at, iaculis venenatis nulla. ';

  //Initialize the plugin
  $('.overlay').ttwMusicPlayer(playlist, {
    //description:description,
    currencySymbol:'$',
    buyText:'BUY',
    tracksToShow:5,
    autoPlay:false,
    jPlayer:{
      swfPath:'assets/plugin/jquery-jplayer' //You need to override the default swf path any time the directory structure changes
    }
  });

    $(".overlay").bind($.jPlayer.event.play, function(event) {
        //playerTime grabs the current % location on the file being played.
        //if they're at the beginning it's 0. If they're at the end it's 100. Etc.
         var playerTime = Math.round(event.jPlayer.status.currentPercentAbsolute);
        //grabs the media currently being played. Usefull for when multiple files are played in the player.
        var mediaName = event.jPlayer.status.src;
        
        $('.overlay').toggleClass('lock');
        
        // Show lyrics
        
        //track it as an event with category:jPlayer, action:Play, label:Name of the file being played, value:location on file as %
        _gaq.push(['_trackEvent', 'jPlayer', 'Play',mediaName,playerTime]);
    });
    //listener for a pause click
    $(".overlay").bind($.jPlayer.event.pause, function(event) {
        //as above, grabbing the % location and media being played
        var playerTime = Math.round(event.jPlayer.status.currentPercentAbsolute);
        var mediaName = event.jPlayer.status.src;
              
        $('.overlay').toggleClass('lock');
        //We'll only track the "pause" if the percent value is less than 100. This is because at 100%
        //when the player ends, it will send a pause event with the end event.
        //we don't need that duplication in GA
        if(playerTime<100){
          //tracking the pause with similar setup to the play event
          _gaq.push(['_trackEvent', 'jPlayer', 'Pause',mediaName,playerTime]);
        }
    });
    //listening for the user dragging the seek bar
    $(".overlay").bind($.jPlayer.event.seeking, function(event) {
        //as above, grabbing the % location and media being played
        var playerTime = Math.round(event.jPlayer.status.currentPercentAbsolute);
        var mediaName = event.jPlayer.status.src;
        //tracking the seeking action similar to above
        _gaq.push(['_trackEvent', 'jPlayer', 'Seeking',mediaName,playerTime]);
    });
    //listening for when the user has stopped dragging the seek bar
    $(".overlay").bind($.jPlayer.event.seeked, function(event) {
        //as above, grabbing the % location and media being played
        var playerTime = Math.round(event.jPlayer.status.currentPercentAbsolute);
        var mediaName = event.jPlayer.status.src;
        //There's some overlap between the seeked and stopped events. When a user clicks
        // the stop button it actually sends a "seek" to the 0 location. So if the seeked location is 0
        // then we track it as a stop, if it's greater than 0, it was an actual seek.
        if(playerTime>0){
            //track the seeked event as above
            _gaq.push(['_trackEvent', 'jPlayer', 'Seeked',mediaName,playerTime]);
        }else{
            //track the stopped event as above
            _gaq.push(['_trackEvent', 'jPlayer', 'Stopped',mediaName,playerTime]);
        }
    });
    //listening for an end ie file completion
    $(".overlay").bind($.jPlayer.event.ended, function(event) {
        //as above, grabbing the % location and media being played
        //except when it ends we force the value as 100%, otherwise it shoots back as 0
        var playerTime = 100;
        var mediaName = event.jPlayer.status.src;
        //track the End event as above.
        _gaq.push(['_trackEvent', 'jPlayer', 'Ended',mediaName,playerTime]);
    });
});



// USAR PARA PEGAR AS LETRAS!!!
// var mediaName = event.jPlayer.status.src;