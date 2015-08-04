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

  $('.jp-play').click(function() {
    $('.overlay').toggleClass('lock');
  });
  $('.jp-pause').click(function() {
    $('.overlay').toggleClass('lock');
  });
});