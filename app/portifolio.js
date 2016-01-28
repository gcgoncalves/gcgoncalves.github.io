var portifolioApp = angular.module('portifolioApp', ['ngRoute']);

portifolioApp.controller('portifolioController', function ($scope) {});

portifolioApp.config(function ($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('!');

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
});