Daily
  .directive('activeCheckButton', function(practiceService) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
           element.bind('keydown', function () {
             if(element[0].value.length > 2) {
              document.getElementById('practice-footer').classList.add('active');
             } 
             else if(element[0].value.length <= 2) {
              document.getElementById('practice-footer').classList.remove('active');
             }
           });
        }
    }
  })
  .directive('sendAnswerBtn', function(practiceService) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            element.bind('click', function () {
                var flip = document.getElementById('flip-container');
                
                var footerPractice = document.getElementById('practice-footer');
                var footerPracticeButton = document.getElementById('practice-footer-button');
                
                var answer = scope.answer; //user answer
                var answers = scope.context.answers;
                
                footerPractice.classList.add('hidden');
                setTimeout(function(){
                  footerPracticeButton.classList.remove('hidden');
                }, 500);

                if(practiceService.verifyAnswer(answers, answer)) {
                  practiceService.updateVerify(true);
                  //ir a la pantalla de verificación bad or ok
                  setTimeout(function(){
                    flip.classList.add('ok');
                    flip.classList.add('flip');
                  }, 500);
                }
                else{
                  practiceService.updateVerify(false);
                  //ir a la pantalla de verificación bad or ok
                  setTimeout(function(){
                    flip.classList.add('error');
                    flip.classList.add('flip');
                  }, 500)
                }
                //desactivar el botón de practice y volver a activar el de your daily
            });
        }
    }
  })
  .directive('sendAnswerErrorBtn', function(practiceService) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            element.bind('click', function () {
                var flip = document.getElementById('flip-container');
                
                var answer = scope.answer; //user answer
                var answers = scope.context.answers;
                
                if(practiceService.verifyAnswer(answers, answer)) {
                  practiceService.updateVerify(true);
                  practiceService.removeError();
                  setTimeout(function(){
                    flip.classList.add('ok');
                    flip.classList.add('flip');
                  }, 500);
                  //ir a la pantalla de verificación bad ok
                  if(practiceService.countErrors() == 0){
                    alert('You are up to date, congratulations');
                  }
                  else {
                    alert('You have more errors, would you try again?');
                    scope.expression = practiceService.initError();
                  }
                }
                else{
                  practiceService.updateVerify(false);
                  practiceService.removeOneLife();
                  setTimeout(function(){
                    flip.classList.add('error');
                    flip.classList.add('flip');
                  }, 500);
                  //ir a la pantalla de verificación bad
                  if(practiceService.countLifes() == 0){
                    alert('You hasn\'t more lives :(');
                  }
                  else {
                    alert('You have more lives, would you try again?');
                  }
                }
                //desactivar el botón de practice y volver a activar el de your daily
            });
        }
    }
  })
  .directive('otherContextBtn', function(practiceService) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            element.bind('click', function () {
              practiceService.otherExpression();
            });
        }
    }
  })
  .directive('quitButton', function(practiceService) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
           element.bind('click', function () {
             navigator.notification.confirm(
              'Are you sure that you want to exit?', 
              function(btn){ if(btn == 2) window.location = '#/home' }, 
              'Quit practice', 
              ['Cancel','Exit']
             );
           });
        }
    }
  })
  .directive('autoHeight', function(practiceService) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
           element.bind('keyup', function () {
              this.style.height = "1px";
              this.style.height = (this.scrollHeight)+"px";          
           });
        }
    }
  })
  .directive('printContext', function() {
    return {
      template: '{{context.value}}',
      restrict: 'A'
    };
  })
;