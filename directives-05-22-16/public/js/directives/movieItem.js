angular.module('homeworkApp')
  .directive('movieItem', function() {
    return {
      restrict: 'E', // create the homework-item element. 'A' would be used to create homework-item as an attribute.
      scope: {
        movie: '=', // the directive gets the student parameter from the parent, however, it can't pass anything back. The '@' asks for the value not the expression or the object. '=' is two-way data-binding
      },
      // template: '<li>{{ student }} likes {{ pizza }}</li>'
      // template: '<div>{{movie}}</div>'
      templateUrl: '/views/directives/movie-item.html'
    }
  });
