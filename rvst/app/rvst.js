var rvstApp = angular.module('rvstApp', ['ngRoute']);

rvstApp.config(function ($routeProvider, $locationProvider) {
  $routeProvider
  .when('/', {
    controller: 'homeController',
    templateUrl: 'app/views/home.html'
  })
  .when('/clippings', {
    controller: 'clippingController',
    templateUrl: 'app/views/clipping.html'
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

rvstApp.controller('homeController', function ($scope) {
    randomizeBackground();
});

rvstApp.controller('clippingController', function ($scope, $http) {
  $('body').css('background', 'rgba(0, 0, 0, 0) url(assets/custom/img/clipping/bg.png) repeat fixed 50% center / cover');

  $scope.clippings= [];
  $http.get('app/clipping.json').success(function(data) { 
      $scope.clippings = data;
  });
});

rvstApp.controller('galleryController', function ($scope) {
    randomizeBackground();
});

rvstApp.directive('clippingItem', function () {
  return {
    scope: '=clippingItem',
    restrict: 'EA',
    templateUrl: 'app/views/clipping-item.html'
    };
});