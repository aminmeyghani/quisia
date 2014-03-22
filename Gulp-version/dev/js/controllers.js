'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', [function() {

  }])
  .controller('MyCtrl2', [function() {

  }])
  .controller('SampleCtrl', ['$scope',function($scope) {

  	$scope.myData = "";

  }])
//-------------
// last semi coon
;