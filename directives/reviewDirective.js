Daily
  .directive('filterAction', function(practiceService) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            element.bind('click', function () {
                var filter = attrs.filterAction;
                if (scope.searchByCorrect != filter) {
                  var ele = element[0];
                  var parent = ele.parentNode;
                  var active = parent.getElementsByClassName('active')[0];
                  
                  active.classList.remove('active');
                  ele.classList.add('active');

                  scope.searchByCorrect = filter;
                  scope.$apply();
                }  
            });
        }
    }
  })

  //esto debe pasar a ser solo open
  //con otro botón hacemos el close
  .directive('showSearch', function() {
    var hideSearch = document.getElementById('hide-search');
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            element.bind('click', function () {
                var input = element[0];
                
                if (!input.classList.contains('opened')){
                  input.classList.add('opened');
                  hideSearch.classList.add('displayed');
                }
                
            });
        }
    }
  })

   .directive('backReview', function() {
    var input = document.getElementById('review-search-header');
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            element.bind('click', function () {

                if (input.classList.contains('opened')){
                  input.classList.remove('opened');
                }
                setTimeout(function(){
                  window.location = '#/home';
                },150);
                
            });
        }
    }
  })

  .directive('hideSearch', function() {
    var hideSearch = document.getElementById('hide-search');
    var input = document.getElementById('review-search-header');
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            element.bind('click', function () {
                if (input.classList.contains('opened')){
                  input.classList.remove('opened');
                  hideSearch.classList.remove('displayed');
                }
            });
        }
    }
  })



;
