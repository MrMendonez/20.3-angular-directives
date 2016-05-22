angular.module('homeworkApp')
  .directive('homeworkItem', function() {
    return {
      restrict: 'E', // create the homework-item element. 'A' would be used to create homework-item as an attribute.
      scope: {
        student: '@', // the directive gets the student parameter from the parent, however, it can't pass anything back. The '@' asks for the value not the expression or the object.
        pizza: '=' // '=' is two-way data-binding
      },
      // template: '<li>{{ student }} likes {{ pizza }}</li>'
      templateUrl: '/views/directives/homework-item.html',
      controller: function($scope, $http) {

        $scope.likePineapple = function() {
          $scope.pizza = 'pineapple';
        }

        $scope.changeName = function() {
          $scope.student = 'darryl';
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
      },
    }
  });
