var portfolioApp = angular.module('portfolioApp', ['ngRoute']);

portfolioApp.config(function ($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider
  .when('/', {
    controller: 'homeController',
    templateUrl: 'app/views/home.html'
  })
  .when('/portfolio', {
    controller: 'portfolioController',
    templateUrl: 'app/views/portfolio.html'
  })
  .when('/about', {
    controller: 'aboutController',
    templateUrl: 'app/views/about.html'
  })
  .otherwise({redirectTo: '/'});
});

portfolioApp.controller('homeController', function ($scope) {});
portfolioApp.controller('portfolioController', function ($scope) {
  var portfolio =
  [
    {
      name : "RVST",
      url : "http://rvstmusic.com/",
      thumbnail : "assets/custom/img/thumbs/rvst.png"
    },
  ];
  $scope.portfolio = portfolio;
});
portfolioApp.controller('aboutController', function ($scope) {});

portfolioApp.directive('portfolioItem', function () {
  return {
    scope: '=portfolioItem',
    restrict: 'EA',
    templateUrl: 'app/views/portfolio-item.html'
    };
});