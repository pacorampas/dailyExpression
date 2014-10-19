Daily
.service('fakeService', function($http) {
	var service = {
		createInfo: function () {
			localStorage.actives = '{"1":{"idExpression":1,"created":"Wed Aug 10 2014 20:18:32 GMT+0200","errors":["2014-08-23T11:13:28.735Z"],"correct":"2014-08-23T13:51:37.285Z"},"2":{"idExpression":2,"created":"2014-08-26T18:48:22.110Z","errors":[],"correct":false},"3":{"idExpression":3,"created":"2014-08-26T18:54:08.682Z","errors":["2014-08-28T18:42:37.696Z"],"correct":"2014-08-28T18:43:02.281Z"},"4":{"idExpression":4,"created":"2014-09-13T08:50:06.115Z","errors":[],"correct":null},"5":{"idExpression":5,"created":"2014-09-08T15:21:11.078Z","errors":[],"correct":null},"6":{"idExpression":6,"created":"2014-09-11T09:50:10.084Z","errors":[],"correct":null},"7":{"idExpression":7,"created":"2014-09-11T09:50:10.084Z","errors":[],"correct":"2014-09-08T15:21:11.078Z"},"8":{"idExpression":8,"created":"2014-08-26T18:54:08.682Z","errors":["2014-08-28T18:42:37.696Z"],"correct":false}}';
			localStorage.levels = '[{"id":1,"value":"nivel primero","expressions":[{"id":1,"value":"value expression primera","explanation":"explicación expresión primera","contexts":[{"id":1,"value":"contexto uno expresión primera","answers":["respuesta uno contexto uno expresión primera","respuesta dos contexto uno expresión primera"]}]},{"id":2,"value":"value expression segunda","explanation":"explicación expresión segunda","contexts":[{"id":2,"value":"contexto uno expresión segunda","answers":["respuesta uno contexto uno expresión segunda","respuesta dos contexto uno expresión segunda"]}]},{"id":3,"value":"value expression tercera","explanation":"explicación expresión tercera","contexts":[{"id":3,"value":"contexto uno expresión tercera","answers":["respuesta uno contexto uno expresión tercera","respuesta dos contexto uno expresión tercera"]}]}]},{"id":2,"value":"nivel segundo","expressions":[{"id":4,"value":"value expression cuarta","explanation":"explicación expresión cuarta","contexts":[{"id":4,"value":"contexto uno expresión cuarta","answers":["respuesta uno contexto uno expresión cuarta","respuesta dos contexto uno expresión cuarta"]}]},{"id":5,"value":"value expression quinta","explanation":"explicación expresión quinta","contexts":[{"id":5,"value":"contexto uno expresión quinta","answers":["respuesta uno contexto uno expresión quinta","respuesta dos contexto uno expresión quinta"]}]},{"id":6,"value":"value expression sexta","explanation":"explicación expresión sexta","contexts":[{"id":6,"value":"contexto uno expresión sexta","answers":["respuesta uno contexto uno expresión sexta","respuesta dos contexto uno expresión sexta"]}]}]},{"id":3,"value":"nivel tercero","expressions":[{"id":7,"value":"value expression septima","explanation":"explicación expresión septima","contexts":[{"id":7,"value":"contexto uno expresión septima","answers":["respuesta uno contexto uno expresión septima","respuesta dos contexto uno expresión septima"]}]},{"id":8,"value":"value expression octava","explanation":"explicación expresión octava","contexts":[{"id":8,"value":"contexto uno expresión octava","answers":["respuesta uno contexto uno expresión octava","respuesta dos contexto uno expresión octava"]}]},{"id":9,"value":"value expression novena","explanation":"explicación expresión novena","contexts":[{"id":9,"value":"contexto uno expresión novena","answers":["respuesta uno contexto uno expresión novena","respuesta dos contexto uno expresión novena"]}]}]}]';
			localStorage.notActives = '{"1":[],"2":[],"3":[9],"active":3}';
			localStorage.todayExpression = '{"idLevel":3,"idExpression":8}';
			var actives = JSON.parse(localStorage.actives);
			var levels = JSON.parse(localStorage.levels);
			var errors = new Object();
			for( key in actives ) {
				if(!actives[key].correct){
					var idExpression = actives[key].idExpression;
					var idLevel = this.findLevelId(levels, idExpression);
					errors[idExpression] = idLevel;
				}
			}
			localStorage.errors = JSON.stringify(errors);
			console.log(errors);
		},

		findLevelId: function (levels, idExpression) {
			for( k in levels ){
				for (index in levels[k].expressions){
					if(levels[k].expressions[index].id == idExpression) {
						return levels[k].id;
					}
				}
			}
		}
	};
	return service;
})

;