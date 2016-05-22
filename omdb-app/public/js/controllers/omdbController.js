angular.module('omdbApp')
.controller('omdbController', function($scope) {
  $scope.movies = [{
    title: 'Batman v Superman',
    director: 'Zach Snyder'
  }, {
    title: 'The Dark Knight',
    director: 'Christopher Nolan'
  }];
});