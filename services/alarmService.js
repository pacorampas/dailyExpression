Daily
.service('alarmService', function(notActivesService) {
	var service = {
		setPracticeAlarm: function () {
			var isDate = new Date();
			var hour = isDate.getHours();	
			var diference = 22 - hour;
			var rand = Math.floor(Math.random() * diference) + 1;

			isDate.setHours( (isDate.getHours() + rand) ); //le sumamos las horas para que suene en ahora + rand horas

			window.plugin.notification.local.add(
				{ 	
					id: '2',
					title: 'Put in practice',
					message: 'Our teacher is waiting you for testing your progress',
					autoCancel: true,
					date: isDate,
					json: { type: 'practice' }
				}
			);
		},

		setDailyAlarm: function() {
			var isDate = new Date();
			isDate.setDate( isDate.getDate() + 1 );
			
			var rand = Math.floor(Math.random() * 9) + 1;

			isDate.setHours(  (rand + 9) ); //le sumamos 9 para que suene a partir de las 9 de la mañana

			window.plugin.notification.local.add(
				{ 	
					id: '1',
					title: 'Your daily is waiting for you',
					message: 'Our teacher has generate your daily expression',
					autoCancel: true,
					date: isDate,
					json: { type: 'daily' }
				}
			);
		},
		
		cancelAlarm: function (id) {
			window.plugin.notification.local.cancel(id);
		},

		alarms: function () {
			window.plugin.notification.local.getScheduledIds( function (scheduledIds) {
				alert(scheduledIds);
			})
		}
	};
	return service;
})
;