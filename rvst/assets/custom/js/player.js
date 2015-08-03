//Initialize the plugin
$('.overlay').ttwMusicPlayer(playlist, {
    currencySymbol:'$',
    buyText:'BUY',
    tracksToShow:5,
    autoplay:false,
    ratingCallback:function(index, playlistItem, rating){
            //some logic to process the rating, perhaps through an ajax call
    } });
