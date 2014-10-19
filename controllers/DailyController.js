Daily.controller('DailyCtrl', function ($scope, $http, expressionService, headerService, alarmService) {
	alarmService.cancelAlarm(1);
	
	headerService.daily();
	expressionService.initToday();
	$scope.expression = expressionService.getExpression();
});