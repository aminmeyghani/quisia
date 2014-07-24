'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', [function() {

  }])
  .controller('MyCtrl2', [function() {
    console.log("changing view and triggering myctrl2")

  }])
  .controller('SampleCtrl', ['$scope',function($scope) {

  	$scope.myData = "";

  }])
//-------------
// last semi coon
;