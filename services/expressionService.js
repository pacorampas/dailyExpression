Daily
.service('expressionService', function(dataService, notActivesService, alarmService) {
	var service = {
		expression: {},
		active: {},
		level: 0,
		initToday: function (){
			var today = JSON.parse(localStorage.todayExpression);
			this.init(today.idLevel, today.idExpression);
			if (this.expression) {
				var today = new Date();
				var dateCreated = new Date(this.active.created);
				if (dateCreated.toDateString() != today.toDateString()) {
					this.createActive();
					//if not exist alarm, create alarm
					alarmService.setPracticeAlarm();
				}
			}
			else {
				console.log('not exist this expression');
			}
		},
		init: function (idLevel, idExpression){
			this.expression = dataService.queryGetExpression(idLevel, idExpression);
			this.active = dataService.queryGetActive(idExpression);
			this.level = idLevel;
		},
		setExpression: function (expression){
			this.expression = expression;
		},
		setActive: function (active){
			this.active = active;
		},
		getExpression: function (){
			return this.expression;
		},
		getActive: function (){
			return this.active;
		},
	    getLevel: function (){
			return this.level;
		},
		createActive: function (){
			if( notActivesService.count() >= 1 ){
				var expressionIdNotActive = notActivesService.getNotActiveExpressionId();
				var newActive = new Object();
				newActive.idExpression = expressionIdNotActive;
				newActive.created = new Date();
				newActive.errors = new Array();
				newActive.correct = null;
				
				var today = JSON.parse(localStorage.todayExpression);
				today.idExpression = expressionIdNotActive;
				today.idLevel = notActivesService.getLevelActive();

				this.init(today.idLevel, today.idExpression);
				//save
				dataService.addActive(newActive);
				localStorage.todayExpression = JSON.stringify(today);
			}
			else {
				alert('not updated, reload');
			}
			if( notActivesService.count() < 1 ){
				//ask for new expression from API
				//change levels
				dataService.apiNewLevel() 
				console.log('call for next level');
			}
		},
		saveActive: function(){
			dataService.updateActive(this.active);
		},
		getRandomContext: function(){
			return this.expression.contexts[Math.floor(Math.random() * this.expression.contexts.length)];
		}
	};
	return service;
})
.service('notActivesService', function() {
	var service = {
		_getNotActives: function(){
			return JSON.parse(localStorage.notActives);
		},
		getNotActiveExpressionId: function(){
			var LSNotActives = this._getNotActives();
			var notActive = LSNotActives[LSNotActives.active].shift();
			localStorage.notActives = JSON.stringify(LSNotActives);
			return notActive;
		},
		addNotActive: function (level){
			var LSNotActives = this._getNotActives();
			LSNotActives[level.id] = new Array();
			for(index in level.expressions){
				LSNotActives[level.id].push(level.expressions[index].id);
			}
			LSNotActives.active = level.id;
			localStorage.notActives = JSON.stringify(LSNotActives);
		},
		count: function () {
			var LSNotActives = this._getNotActives();
			return LSNotActives[LSNotActives.active].length;
		},
		getLevelActive: function () {
			var LSNotActives = this._getNotActives();
			return LSNotActives.active;
		},
		getActiveKey: function () {
			var LSNotActives = this._getNotActives();
			return LSNotActives.active;
		}
	};
	return service;
})

;