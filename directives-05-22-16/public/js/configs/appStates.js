angular.module('homeworkApp')
  .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/views/home.html'
    });

    $locationProvider.html5Mode(true);
  });
