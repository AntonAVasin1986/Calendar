/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var calendarModule = angular.module('calendar', []);

	__webpack_require__(1);
	__webpack_require__(2);
	__webpack_require__(3);


	calendarModule.controller('AppController', ['$scope', function($scope) {

	    $scope.selectedDate = new Date(2017, 0, 9);
	    
	}]);

/***/ },
/* 1 */
/***/ function(module, exports) {

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

/***/ },
/* 2 */
/***/ function(module, exports) {

	
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


/***/ },
/* 3 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);