var rvstApp = angular.module('rvstApp', ['ngRoute']);

rvstApp.config(function ($routeProvider, $locationProvider) {
  $routeProvider
  .when('/', {
    redirectTo: '/familiar_signs'
  })
  .when('/familiar_signs', {
    controller: 'fsController',
    templateUrl: 'app/views/home.html'
  })
  .when('/fail_together', {
    controller: 'ftController',
    templateUrl: 'app/views/home.html'
  })
  .when('/clippings', {
    redirectTo: '/clipping'
  })
  .when('/clipping', {
    controller: 'clippingController',
    templateUrl: 'app/views/clipping.html'
  })
  .when('/gallery', {
    controller: 'galleryController',
    templateUrl: 'app/views/gallery.html'
  })
  .otherwise({redirectTo: '/'});

  // use the HTML5 History API
  $locationProvider.html5Mode(true);
});

var randomizeBackground = function(){
    var width = $(window).width();
    var backgrounds = ['bg_beige_sm.jpg', 'bg_blue_sm.jpg', 'bg_pink_sm.jpg', 'bg_purple_sm.jpg', 'bg_salmon_sm.jpg'];
    if (width > 1199) {
        backgrounds = ['bg_beige.jpg', 'bg_blue.jpg', 'bg_pink.jpg', 'bg_purple.jpg', 'bg_salmon.jpg'];
    }
    var bg_index = Math.floor(Math.random() * backgrounds.length);
    $('body').css('background', 'rgba(0, 0, 0, 0) url(assets/custom/img/'+backgrounds[bg_index]+') repeat fixed 50% center / cover');
};

rvstApp.controller('ftController', function ($scope) {
  randomizeBackground();

  $scope.playlist = [
    {
      mp3:'assets/custom/music/fail_together/01-Had-I-Known.mp3',
      oga:'assets/custom/music/fail_together/01-Had-I-Known.ogg',
      rating: 5,
      title:'Had I Known',
      buy:'https://rvst.bandcamp.com/track/had-i-known',
      duration:'01:03',
      artist:'RVST',
      cover:'assets/custom/img/rvst.jpg'
    },
    {
      mp3:'assets/custom/music/fail_together/02-Odd-Path.mp3',
      oga:'assets/custom/music/fail_together/02-Odd-Path.ogg',
      rating: 5,
      title:'Odd Path',
      buy:'https://rvst.bandcamp.com/track/odd-path',
      duration:'03:39',
      artist:'RVST',
      cover:'assets/custom/img/rvst.jpg'
    },
    {
      mp3:'assets/custom/music/fail_together/03-Brick-Heart.mp3',
      oga:'assets/custom/music/fail_together/03-Brick-Heart.ogg',
      rating: 5,
      title:'Brickheart',
      buy:'https://rvst.bandcamp.com/track/brickheart',
      duration:'03:34',
      artist:'RVST',
      cover:'assets/custom/img/rvst.jpg'
    },
    {
      mp3:'assets/custom/music/fail_together/04-Dont-Be-Sad.mp3',
      oga:'assets/custom/music/fail_together/04-Dont-Be-Sad.ogg',
      rating: 5,
      title:'Don\'t be Sad',
      buy:'https://rvst.bandcamp.com/track/dont-be-sad',
      duration:'03:37',
      artist:'RVST',
      cover:'assets/custom/img/rvst.jpg'
    },
    {
      mp3:'assets/custom/music/fail_together/05-Ashes.mp3',
      oga:'assets/custom/music/fail_together/05-Ashes.ogg',
      rating: 5,
      title:'Ashes',
      buy:'https://rvst.bandcamp.com/track/ashes',
      duration:'05:11',
      artist:'RVST',
      cover:'assets/custom/img/rvst.jpg'
    }
  ];
  $scope.tracksToShow = 5;
  $scope.albumTitle = "Fail Together";
  $scope.cover = 'assets/custom/img/rvst.jpg';
  $scope.switchCover = 'assets/custom/img/fs_release.png';
  $scope.switchUrl = '/familiar_signs';
  $scope.downloadUrl = 'assets/custom/music/RVST - Fail Together (EP, 2015).zip';
});

rvstApp.controller('fsController', function ($scope) {
  $('body').css('background', 'rgba(0, 0, 0, 0) url(assets/custom/img/bg_fs.jpg) repeat fixed 50% center / cover');

  $scope.playlist = [
    {
      mp3:'assets/custom/music/familiar_signs/01-Sirens.mp3',
      oga:'assets/custom/music/familiar_signs/01-Sirens.ogg',
      rating: 5,
      title:'Sirens',
      duration:'01:20',
      artist:'RVST',
      cover:'assets/custom/img/familiar_signs.jpg'
    },
    {
      mp3:'assets/custom/music/familiar_signs/02-Big-Box.mp3',
      oga:'assets/custom/music/familiar_signs/02-Big-Box.ogg',
      rating: 5,
      title:'Big Box',
      duration:'04:32',
      artist:'RVST',
      cover:'assets/custom/img/familiar_signs.jpg'
    },
    {
      mp3:'assets/custom/music/familiar_signs/03-Love-Song.mp3',
      oga:'assets/custom/music/familiar_signs/03-Love-Song.ogg',
      rating: 5,
      title:'Love Song',
      duration:'01:34',
      artist:'RVST',
      cover:'assets/custom/img/familiar_signs.jpg'
    }
  ];
  $scope.tracksToShow = 3;
  $scope.albumTitle = "Familiar Signs";
  $scope.cover = 'assets/custom/img/familiar_signs.jpg';
  $scope.switchCover = 'assets/custom/img/ft_release.png';
  $scope.switchUrl = '/fail_together';
});

rvstApp.controller('clippingController', function ($scope, $http) {
  $('body').css('background', 'rgba(0, 0, 0, 0) url(assets/custom/img/clipping/bg.png) repeat fixed 50% center / cover');

  $scope.clippings= [];
  $http.get('app/clipping.json').then(function(response) {
      $scope.clippings = response.data;
  });
});

rvstApp.controller('galleryController', function ($scope) {
  $('body').css('background', 'rgba(0, 0, 0, 0) url(assets/custom/img/bg_fs.jpg) repeat fixed 50% center / cover');
});

rvstApp.directive('clippingItem', function () {
  return {
    scope: '=clippingItem',
    restrict: 'EA',
    templateUrl: 'app/views/clipping-item.html'
    };
});

rvstApp.directive('player', function() {
  return {
    restrict: 'EA',
    scope: {
      playlist: '=',
      tracksToShow: '='
    },
    link: function (scope, element, attrs) {
      element.ttwMusicPlayer(scope.playlist, {
        tracksToShow:scope.tracksToShow,
        autoPlay:false,
        jPlayer:{
          swfPath:'assets/plugin/jquery-jplayer' //You need to override the default swf path any time the directory structure changes
        }
      }, 2000);

      element.bind($.jPlayer.event.play, function(event) {
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
      element.bind($.jPlayer.event.pause, function(event) {
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
      element.bind($.jPlayer.event.seeking, function(event) {
        //as above, grabbing the % location and media being played
        var playerTime = Math.round(event.jPlayer.status.currentPercentAbsolute);
        var mediaName = event.jPlayer.status.src;
        //tracking the seeking action similar to above
        ga('send', 'event', 'jPlayer', 'Seeking', (mediaName + '@' + playerTime));
      });

      //listening for when the user has stopped dragging the seek bar
      element.bind($.jPlayer.event.seeked, function(event) {
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
      element.bind($.jPlayer.event.ended, function(event) {
        //as above, grabbing the % location and media being played
        //except when it ends we force the value as 100%, otherwise it shoots back as 0
        var playerTime = 100;
        var mediaName = event.jPlayer.status.src;
        //track the End event as above.
        ga('send', 'event', 'jPlayer', 'Ended', (mediaName + '@' + playerTime));
      });
    }
  };
});