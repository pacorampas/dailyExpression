Daily
  .directive('headerSwitcher', function(practiceService) {
    var header = document.getElementById('header-app');
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            element.bind('click', function () {
                alert(attrs.headerSwitcher);
                location.href = '#/home';
            });
        }
    }
  })

;