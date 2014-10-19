Daily.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/out', {
        templateUrl: 'views/out.html',
        controller: 'OutCtrl'
      }).
      when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      }).
      when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl'
      }).
      when('/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      }).
      when('/daily', {
        templateUrl: 'views/daily.html',
        controller: 'DailyCtrl'
      }).
      when('/review', {
        templateUrl: 'views/review.html',
        controller: 'ReviewCtrl'
      }).
      when('/practice', {
        templateUrl: 'views/practice.html',
        controller: 'PracticeCtrl'
      }).
      when('/practice_errors', {
        templateUrl: 'views/practice_errors.html',
        controller: 'PracticeErrorsCtrl'
      }).
      
      //DEV
      when('/fake_data', {
        templateUrl: 'views/fake.html',
        controller: 'FakeCtrl'
      }).

      when('/buttons', {
        templateUrl: 'elements/buttons.html',
      }).

      when('/disposition', {
        templateUrl: 'elements/disposition/disposition.html',
      }).

      when('/disposition2', {
        templateUrl: 'elements/disposition/disposition2.html',
      }).

      when('/card', {
        templateUrl: 'elements/card.html',
      }).

      when('/filters', {
        templateUrl: 'elements/filters.html',
      }).

      when('/example_daily', {
        templateUrl: 'elements/examples/daily.html',
      }).

      when('/carousel', {
        templateUrl: 'views/carousel.html',
      }).
      
      otherwise({
        redirectTo: '/out'
      });
  }]);