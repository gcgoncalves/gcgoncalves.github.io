var portifolioApp = angular.module('portifolioApp', ['ngRoute']);

portifolioApp.config(function ($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider
  .when('/', {
    controller: 'homeController',
    templateUrl: 'app/views/home.html'
  })
  .when('/portifolio', {
    controller: 'portifolioController',
    templateUrl: 'app/views/portifolio.html'
  })
  .when('/about', {
    controller: 'aboutController',
    templateUrl: 'app/views/about.html'
  })
  .otherwise({redirectTo: '/'});
});

portifolioApp.controller('homeController', function ($scope) {});
portifolioApp.controller('portifolioController', function ($scope) {
  var portifolio = 
  [
    {
      name : "RVST",
      url : "http://rvstmusic.com/",
      thumbnail : "assets/custom/img/thumbs/rvst.png"
    },
  ];
  $scope.portifolio = portifolio;
});
portifolioApp.controller('aboutController', function ($scope) {});

portifolioApp.directive('portifolioItem', function () {
  return {
    scope: '=portifolioItem',
    restrict: 'EA',
    templateUrl: 'app/views/portifolio-item.html'
    };
});