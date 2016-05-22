angular.module('omdbApp')
.directive('movieItem', function() {
  return {
    restrict: 'E',
    scope: {
      title: '@',
      director: '='
    },
    templateUrl: 'views/directives/movie-item.html',
    controller: function($scope, $http) {
      $scope.likeAvengers = function() {
        $scope.title = 'Avengers';
      }

      $scope.changeDirector = function() {
        $scope.director = 'Joss Whedon'
      }

      $scope.getRepos = function(title) {
        $http.get('http://www.omdbapi.com/?s=matrix&y=&plot=short&r=json')
      }
    }
  }
})