'use strict';

var calendarModule = angular.module('calendar', []);

require('./components/daysGrid.component');
require('./components/calendar.component');
require('./styles/styles.scss');


calendarModule.controller('AppController', ['$scope', function($scope) {

    $scope.selectedDate = new Date(2017, 0, 9);
    
}]);