angular.module('omdbApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'views/partials/home.html'
    });

  $locationProvider.html5Mode(true);
});