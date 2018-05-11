$(document).ready(function(){

  //Initialize the plugin
  $('#player_holder').ttwMusicPlayer(playlist, {
    currencySymbol:'$',
    buyText:'BUY',
    tracksToShow:5,
    autoPlay:false,
    jPlayer:{
      swfPath:'assets/plugin/jquery-jplayer' //You need to override the default swf path any time the directory structure changes
    }
  });

  $("#player_holder").bind($.jPlayer.event.play, function(event) {
      //playerTime grabs the current % location on the file being played.
      //if they're at the beginning it's 0. If they're at the end it's 100. Etc.
          var playerTime = Math.round(event.jPlayer.status.currentPercentAbsolute);
      //grabs the media currently being played. Usefull for when multiple files are played in the player.
      var mediaName = event.jPlayer.status.src;

      $('.overlay').addClass('lock');

      // Show lyrics

      //track it as an event with category:jPlayer, action:Play, label:Name of the file being played, value:location on file as %
      ga('send', 'event', 'jPlayer', 'Play', (mediaName + '@' + playerTime));
  });
  //listener for a pause click
  $("#player_holder").bind($.jPlayer.event.pause, function(event) {
      //as above, grabbing the % location and media being played
      var playerTime = Math.round(event.jPlayer.status.currentPercentAbsolute);
      var mediaName = event.jPlayer.status.src;

      $('.overlay').removeClass('lock');
      //We'll only track the "pause" if the percent value is less than 100. This is because at 100%
      //when the player ends, it will send a pause event with the end event.
      //we don't need that duplication in GA
      if(playerTime<100){
          //tracking the pause with similar setup to the play event
          ga('send', 'event', 'jPlayer', 'Pause', (mediaName + '@' + playerTime));
      }
  });
  //listening for the user dragging the seek bar
  $("#player_holder").bind($.jPlayer.event.seeking, function(event) {
      //as above, grabbing the % location and media being played
      var playerTime = Math.round(event.jPlayer.status.currentPercentAbsolute);
      var mediaName = event.jPlayer.status.src;
      //tracking the seeking action similar to above
      ga('send', 'event', 'jPlayer', 'Seeking', (mediaName + '@' + playerTime));
  });
  //listening for when the user has stopped dragging the seek bar
  $("#player_holder").bind($.jPlayer.event.seeked, function(event) {
      //as above, grabbing the % location and media being played
      var playerTime = Math.round(event.jPlayer.status.currentPercentAbsolute);
      var mediaName = event.jPlayer.status.src;
      //There's some overlap between the seeked and stopped events. When a user clicks
      // the stop button it actually sends a "seek" to the 0 location. So if the seeked location is 0
      // then we track it as a stop, if it's greater than 0, it was an actual seek.
      if(playerTime>0){
          //track the seeked event as above
          ga('send', 'event', 'jPlayer', 'Seeked', (mediaName + '@' + playerTime));
      }else{
          //track the stopped event as above
          ga('send', 'event', 'jPlayer', 'Stopped', (mediaName + '@' + playerTime));
      }
  });
  //listening for an end ie file completion
  $("#player_holder").bind($.jPlayer.event.ended, function(event) {
      //as above, grabbing the % location and media being played
      //except when it ends we force the value as 100%, otherwise it shoots back as 0
      var playerTime = 100;
      var mediaName = event.jPlayer.status.src;
      //track the End event as above.
      ga('send', 'event', 'jPlayer', 'Ended', (mediaName + '@' + playerTime));
  });
});



// USAR PARA PEGAR AS LETRAS!!!
// var mediaName = event.jPlayer.status.src;
