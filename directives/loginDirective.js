Daily
  .directive('loginButton', function(practiceService) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            var user = document.getElementById('login-user');
            var pass = document.getElementById('login-pass');
            element.bind('click', function () {
                if(user.value == 'admin' && pass.value == 'admin'){
                    user.classList.remove('error');
                    pass.classList.remove('error');
                    location.href = '#/home';
                }
                else {
                    user.classList.add('error');
                    pass.classList.add('error');
                }
            });
        }
    }
  })

;