Daily
    
  .controller('MoldalCtrl', function ($scope) {
    $scope.values = {title: 'dos', content: ''};

     $scope.addTitle = function (text) {
            $scope.values.title = text;
            $scope.$apply();
          };

      $scope.addContent = function(text) {
        $scope.values.content = text;
        console.log($scope.values.content);
        $scope.$apply();
      };

      $scope.open = function() {
        document.body.classList.add('modal-opened');
      };

      $scope.hide = function() {
        document.body.classList.remove('modal-opened');
      };
  })

  .directive('showModal', function() {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            element.bind('click', function () {
                var explanationContainer = document.getElementById('de-modal');
                explanationContainer.getElementsByTagName('p')[0].innerHTML = attrs.value;
                explanationContainer.getElementsByTagName('p')[1].innerHTML = attrs.content;
                document.body.classList.add('modal-opened');
            });
        }
    }
  })

  .directive('hideModal', function() {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            element.bind('click', function () {
                document.body.classList.remove('modal-opened');
            });
        }
    }
  })

  .directive('modalDir', function() {
    return {
        restrict: 'A',

        link: function (scope, element) {
          element.bind("click", function () {
            //console.log(scope.values);
          });
        }
    }
  })

  .directive('modalTemplate', function() {
      return {
          restrict: 'A',
          require: 'modalDir',
          templateUrl: 'templates/modal.html',
      }
   })

  .directive('modalAddValues', function($rootScope) {
      return {
          restrict: 'A',
          require: 'modalDir',
          link: function (scope, element, attrs, controller) {
            element.bind("click", function () {
                controller.addContent(attrs.modalContent);
                controller.addTitle(attrs.modalTitle);
            });
          }
      }
   })

    .directive('modalReview', function() {
      return {
          restrict: 'A',
          templateUrl: 'templates/modal_review.html',
          link: function (scope, element, attrs, controller) {  
            element.bind("click", function () {
                
               var content = {expression: attrs.modalExpression, explanation: attrs.modalExplanation, review: true };
               console.log(content.modalExpression);
               controller.addContent(content);
               controller.addTitle('REVIEWING');
            });
          }
      }
   })

  .directive('modalOpen', function() {
      return {
          restrict: 'A',
          require: 'modalDir',
          link: function (scope, element, attrs, controller) {
            element.bind("click", function () {
                controller.open();
            });
          }
      }
   })
  .directive('modalHide', function() {
      return {
          restrict: 'A',
          require: 'modalDir',
          link: function (scope, element, attrs, controller) {
            element.bind("click", function () {
                controller.hide();
            });
          }
      }
   })
;
