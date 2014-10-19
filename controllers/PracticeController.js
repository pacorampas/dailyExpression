Daily.controller('PracticeCtrl', function ($scope, $http, practiceService, headerService, alarmService) {
  // activar botón de daily y desactivar el botón de put in practice
  localStorage.practice = '0';

  // activar alarma de daily para el día siguiente
  //alarmService.setDailyAlarm();

  headerService.practice();
  practiceService.init();
  $scope.expression = practiceService.getExpression().getExpression();
  $scope.context =  practiceService.getExpression().getRandomContext();
});