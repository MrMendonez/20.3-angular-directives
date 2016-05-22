angular.module('homeworkApp')
.controller('HomeworkController', function($scope) {
  $scope.homeworks = [{
    student: 'shamoons',
    pizza: 'cheese'
  }, {
    student: 'cbmoate',
    pizza: 'sausage'
  }];
});