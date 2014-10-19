Daily

.filter('isCorrect', function() {
  return function(expressionId) {
    var actives = JSON.parse(localStorage.actives);
    var correct = actives[expressionId].correct;
    if(correct == null || correct == "" || !correct)
      return false;
    else
      return true;
  };
})

.filter('byCorrect', function() {
  //argument is used for filter by corrected if is equal 1, by not corrected if is equal 0 and by all if is equal 2
  return function(expressions, argument) {
    var actives = JSON.parse(localStorage.actives);

    if( argument == 2 ) return expressions;

    var onlyExpressionsCorrected = new Array();
    var onlyExpressionsInCorrected = new Array();

    for(index in expressions) {
      var tmpCorrect = actives[ expressions[index].id].correct;
      if (tmpCorrect == null || tmpCorrect == '' || tmpCorrect == false) 
        onlyExpressionsInCorrected.push(expressions[index]);
      else
        onlyExpressionsCorrected.push(expressions[index]);
    }

    if ( argument == 0 ) {
      return onlyExpressionsInCorrected;
    }
    else if ( argument == 1 ) {
      return onlyExpressionsCorrected;
    }
  };
})

;