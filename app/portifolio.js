var portifolioApp = angular.module('portifolioApp', ['ngRoute']);

portifolioApp.controller('portifolioController', function ($scope) {});

portifolioApp.config(function ($routeProvider, $locationProvider) {
  $routeProvider
  .when('/', {
    controller: 'portifolioController',
    templateUrl: 'app/views/home.html'
  })
  .when('/portifolio', {
    controller: 'portifolioController',
    templateUrl: 'app/views/portifolio.html'
  })
  .otherwise({redirectTo: '/'});

  // use the HTML5 History API
  $locationProvider.html5Mode(true);
});