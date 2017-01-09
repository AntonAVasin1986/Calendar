'use strict';

angular.module('calendar').component('daysGrid', {
	templateUrl: './src/templates/daysGrid.html',
	bindings: {
		selectedDate: '<',
		viewMonth: '<',
		viewYear: '<',
		selectedDateChanged: '&'
	},
	controller: function daysGridController() {
		
		var ctrl = this;

		ctrl.weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

		ctrl.daysCache = [];
		ctrl.updateDaysCache = function() {
			ctrl.daysCache = [];
			var firstDay = new Date(ctrl.viewYear, ctrl.viewMonth, 1);
			var day = firstDay.getDay();

			firstDay.setDate(firstDay.getDate() - day);
			for (var i=0; i < 7 * 5; i++){
				ctrl.daysCache.push({ date : new Date(firstDay), thisMonth: ctrl.viewMonth === firstDay.getMonth()});
				firstDay.setDate(firstDay.getDate() + 1);
			}
		};

        ctrl.$onChanges = function (changesObj) {
            var arg = changesObj.viewMonth || changesObj.viewYear;
            if (arg && (arg.currentValue !== arg.previousValue)) {
                ctrl.updateDaysCache();
            }
        };

		ctrl.getWeekNumbers = function() {
			var firstDay = new Date(ctrl.viewYear, ctrl.viewMonth, 1);
			var onejan = new Date(ctrl.viewYear, 0, 1);
			var week = Math.ceil( (((firstDay - onejan) / 86400000) + onejan.getDay() + 1) / 7 );

			return [week, week + 1, week + 2, week + 3, week + 4];
		};

		ctrl.changeDate = function(dateItem) {
			ctrl.selectedDateChanged({newDate : dateItem.date});
		};
	}
});