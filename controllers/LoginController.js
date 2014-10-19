Daily.controller('LoginCtrl', function ($scope, $http, headerService, fakeService) {
  headerService.login();
});