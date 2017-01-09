
angular.module('calendar').component('calendarComponent', {
    templateUrl: './src/templates/cal.html',
    bindings: {
		date: '<',
        dateChanged: '&'
	},
    controller: [function calendarComponentController() {

        var ctrl = this;

        ctrl.date = ctrl.date || new Date();
        
        ctrl.currentView = {
            month: ctrl.date.getMonth(),
            year: ctrl.date.getFullYear()
        };

        ctrl.monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'Nowember', 'December'];

        ctrl.changeMonthTo = function(monthNumber) {
            ctrl.currentView.month = monthNumber;
        };

        ctrl.shiftYear = function(inc){
            ctrl.currentView.year += inc;
        };

        ctrl.changeDate = function(newDate) {
            ctrl.date = newDate;
            ctrl.currentView = {
                month: ctrl.date.getMonth(),
                year: ctrl.date.getFullYear()
            };

            ctrl.dateChanged({date: newDate});
        };

    }]
});
