var portifolioApp = angular.module('portifolioApp', ['ngRoute']);

portifolioApp.controller('portifolioController', function ($scope) {});

portifolioApp.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    controller: 'portifolioController',
    templateUrl: 'app/views/home.html'
  })
  .otherwise({redirectTo: '/'});
});