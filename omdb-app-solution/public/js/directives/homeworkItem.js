angular.module('homeworkApp')
.directive('homeworkItem', function() {
  return {
    restrict: 'E',
    scope: {
      student: '@',
      pizza: '='
    },
    templateUrl: '/views/directives/homework-item.html',
    controller: function($scope, $http) {
      $scope.likePineapple = function() {
        $scope.pizza = 'pineapple';
      }

      $scope.changeName  = function() {
        $scope.student = 'longp';
      }

      $scope.getRepos = function(student) {
        $http.get('https://api.github.com/users/' + student + '/repos')
        .then(function(response) {
          $scope.repos = response.data;
        });
      }

      $scope.clearRepos = function() {
        $scope.repos = [];
      }
    }
  }
});