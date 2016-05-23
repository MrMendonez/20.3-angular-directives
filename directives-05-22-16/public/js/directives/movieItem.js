angular.module('homeworkApp')
  .directive('movieItem', function() {
    return {
      restrict: 'E', // create the homework-item element. 'A' would be used to create homework-item as an attribute.
      scope: {
        movie: '=', // the directive gets the student parameter from the parent, however, it can't pass anything back. The '@' asks for the value not the expression or the object. '=' is two-way data-binding
      },
      templateUrl: '/views/directives/movie-item.html',
      controller: function($scope, $http) {
        $scope.getActors = function() {
          console.log('getActors function fired');
          $http.get('http://www.omdbapi.com/?i=' + $scope.movie.imdbID + '&plot=short&r=json')
          .then(function(response) {
            $scope.actors = response.data.Actors.split(',');
          })
        }
      }
    }
  });
