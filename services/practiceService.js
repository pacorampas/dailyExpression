Daily
.service('practiceService', function(expressionService) {
	var service = {
    expression: expressionService,
    lifes: parseInt(localStorage.lifes),
    errors: JSON.parse(localStorage.errors),
    init: function(){
      var today = JSON.parse(localStorage.todayExpression);
      expressionService.init(today.idLevel, today.idExpression);
    },
		updateVerify: function (isOk){
			var active = this.expression.getActive();
      var expressionId =  this.expression.getExpression().id;
      var level =  this.expression.getLevel();
			if(isOk) {
				active.correct = new Date();
        this.removeError();
			}
			else {
				active.errors.push(new Date());
				active.correct = false;
        this.addError();
			}
      this.expression.setActive(active);
      this.expression.saveActive();
		},
    initError: function (){
      //Object.keys(this.errors).length puede fallar en android, hay que porbar :( en Can I use no lo pude encontrar
      var errorsLikeArr = Object.keys(this.errors); //to use object like array
      var rand = Math.floor(Math.random() * errorsLikeArr.length);
      var randomKeyError = errorsLikeArr[rand.toString()];
      var idLevel = this.errors[randomKeyError];
      var idExpression = randomKeyError;
      this.expression.init(idLevel, idExpression);
    },
    countErrors: function(){
      return Object.keys(this.errors).length;
    },
    addError: function (){
      this.errors[this.expression.getExpression().id] = this.expression.getLevel();
      localStorage.errors = JSON.stringify(this.errors);
    },
    removeError: function(){
      delete this.errors[this.expression.getExpression().id];
      localStorage.errors = JSON.stringify(this.errors);
    },
		verifyAnswer: function (answers, userAnswer){
      //quitar dobles espacios y saltos de línea
      //quitar signos de puntuación
      if(userAnswer == '' || typeof userAnswer === "undefined") return false;

      userAnswer = userAnswer.replace(/\s+/g, " ");
      userAnswer = userAnswer.replace(/\s+\?/g, "?");
      userAnswer = userAnswer.replace(/\s+!/g, "!");
      userAnswer = userAnswer.replace(/\s+\./g, ".");
      userAnswer = userAnswer.replace(/\s+,/g, ",");
      userAnswer = userAnswer.replace(/\s+:/g, ":");
      var answerWords = userAnswer.split(" ");
      
      for(index in answers){
        var tempWords = answers[index].split(" ");
        var countMistakes = 0;
        var maxMistakes = tempWords.length;
        for(i in tempWords){
        	if( typeof answerWords[i] === "undefined" ) {
        		countMistakes += tempWords[i].length;
        	}
          else {
            for(j in tempWords[i]){
              //estos signos no cuentan como error
              if(tempWords[i][j] != "." && tempWords[i][j] != "," && 
                tempWords[i][j] != "!" && tempWords[i][j] != "?"){
                if(tempWords[i][j] != answerWords[i][j]) countMistakes++;
              }
              if(countMistakes > maxMistakes) break;     
            }
          }
          if(countMistakes > maxMistakes) break;
        }
        if(countMistakes < maxMistakes) return true;
      }
      return false;
		},
    countLifes: function () {
      return localStorage.lifes;
    },
    removeOneLife: function(){
      if(localStorage.lifes > 0) localStorage.lifes--;
      this.saveLifes();
    },
    addOneLife: function(){
      if(localStorage.lifes < 3) localStorage.lifes++;
      this.saveLifes();
    },
    saveLifes: function(){
      localStorage.lifes = localStorage.lifes;
    },
    getExpression: function (){
      return this.expression;
    }
	};
	return service;
})
;