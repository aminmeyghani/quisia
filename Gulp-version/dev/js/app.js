'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['ngRoute','myApp.filters','myApp.services','myApp.directives','myApp.controllers'])
  
.config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider.when('/components', {templateUrl: 'pages/all/app/app-components.html', controller: 'MyCtrl1'});
  $routeProvider.when('/mixins', {templateUrl: 'pages/all/app/app-mixins.html', controller: 'MyCtrl2'});
  $routeProvider.when('/docs/mixins', {templateUrl: 'pages/all/app/app-mixins.html', controller: 'MyCtrl2'});
  $routeProvider.when('/utils', {templateUrl: 'pages/all/_/_globals/_utils.html', controller: 'MyCtrl2'});
  $routeProvider.when('/demos/demo1', {templateUrl: 'pages/main/demo1.html', controller: 'MyCtrl2'});
  $routeProvider.when('/docs/:docName?', { templateUrl:function(params) {
    // if no doc is mentioned, sets a default value to app-base for the params.
      params.docName === undefined ? params.docName = 'app-base' : params.docName;
      // var local = $location;
      // debugger;
      
      return '/pages/main/docs.html';
    }});
  
  $routeProvider.when('/home', {templateUrl: 'toc.html', controller: 'MyCtrl2'});
  $routeProvider.otherwise({redirectTo: '/home'});
  // Turn on for production.
  // $locationProvider.html5Mode(true);
}])


.controller("MainCtrl", ['$scope','$routeParams', '$location', function($scope,$routeParams,$location) {
  $scope.router = $routeParams;
  var location = $location;
  $scope.location = $location;
  $scope.isMainPageActive = function (urlKey) { return $location.url().doesContain(urlKey)? 'active' : ''; }
  $scope.isActive = function(page){return  $routeParams.docName === page ? 'active' : '';}
}])



