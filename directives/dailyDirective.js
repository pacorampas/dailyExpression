Daily
  .directive('daily', function() {
    return {
      restrict: 'A',
      scope: {
        expression: '=daily'
      },
      template: '{{ expression.expression }}'
    };
  })
  .directive('card', function(practiceService) {
    return {
        restrict: 'EA',
        scope: {
          exp: "=data",
        },
        transclude: true,
        templateUrl: 'templates/card.html',
         link: function (scope, element, attrs) {
          if(attrs.titleFront)
            element[0].querySelector('#title-front').innerHTML = attrs.titleFront;
          if(attrs.valueFront)
            element[0].querySelector('#value-front').innerHTML = attrs.valueFront;
          if(attrs.titleBack)
            element[0].querySelector('#title-back').innerHTML = attrs.titleBack;
          if(attrs.valueBack)
            element[0].querySelector('#value-back').innerHTML = attrs.valueBack;
        }
    }
  })
  .directive('flip', function(practiceService) {
    return {
        restrict: 'AC',
        link: function (scope, element, attrs) {
            element.bind('click', function () {
              element[0].querySelector('#flip-container').classList.toggle('flip');
            });
        }
    }
  })
;