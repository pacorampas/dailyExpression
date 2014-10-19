Daily
.service('dataService', function(notActivesService) {
	var service = {
		levels: JSON.parse(localStorage.levels),
		actives: JSON.parse(localStorage.actives),

		queryGetLevels: function (){
			return this.levels;
		},
		queryGetLevel: function (idLevel){
			for (index in this.levels ) {
				if (this.levels[index].id == idLevel) {
					return this.levels[index];
				}
			}
			return false;
		},
		queryGetExpression: function (idLevel, idExpression){
			var level = this.queryGetLevel(idLevel);
			for (index in level.expressions) {
				if (level.expressions[index].id == idExpression) {
					return level.expressions[index];
				}
			}
			return false;
		},
		queryGetActive: function (idExpression) {
			return this.actives[idExpression];
		},
		addLevel: function (newLevel){
			var save = true;
			// es para sustituir a this.levels, no se proque si accedo desde ahí no tira :(
			var LSLevels = JSON.parse(localStorage.levels);
			for(index in LSLevels){
				//console.log(newLevel.id +'=='+ LSLevels[index].id);
				if(newLevel.id == LSLevels[index].id){
					save = false;
				}
			}

			if(save) {
				LSLevels.push(newLevel);
				localStorage.levels = JSON.stringify(LSLevels);
				notActivesService.addNotActive(newLevel);
			}
				
		},
		addActive: function(newActive) {
			this.actives[newActive.idExpression] = newActive;
			localStorage.actives = JSON.stringify(this.actives);
		},
		updateActive: function(active){
			this.actives[active.idExpression] = active;
			localStorage.actives = JSON.stringify(this.actives);
		},
		apiNewLevel: function() {
			var today = JSON.parse(localStorage.todayExpression);
			//pedir a la API un nuevo level
			var level = '{"id":4,"value":"nivel cuarto","expressions":[{"id":10,"value":"value expression decima","explanation":"explicación expresión decima","contexts":[{"id":10,"value":"contexto uno expresión decima","answers":["respuesta uno contexto uno expresión decima","respuesta dos contexto uno expresión decima"]}]},{"id":11,"value":"value expression onceava","explanation":"explicación expresión onceava","contexts":[{"id":11,"value":"contexto uno expresión onceava","answers":["respuesta uno contexto uno expresión onceava","respuesta dos contexto uno expresión onceava"]}]},{"id":12,"value":"value expression doceava","explanation":"explicación expresión doceava","contexts":[{"id":12,"value":"contexto uno expresión doceava","answers":["respuesta uno contexto uno expresión doceava","respuesta dos contexto uno expresión doceava"]}]}]}';
			this.addLevel(JSON.parse(level));
		}
	};
	return service;
})

;