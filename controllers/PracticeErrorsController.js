Daily.controller('PracticeErrorsCtrl', function ($scope, $http, practiceService) {
  practiceService.initError();
  $scope.expression = practiceService.getExpression().getExpression();
  $scope.context = practiceService.getExpression().getRandomContext();
});