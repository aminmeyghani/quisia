'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['ngRoute','myApp.filters','myApp.services','myApp.directives','myApp.controllers'])
  
.config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider) {
  var routeDefaults = {
    docs : {
      name : 'doc',
      defaultPath : 'app-base'
    },
    demos : {
      name : 'demos',
      defaultPath : 'buttons'
    }
  };
  $routeProvider.when('/components', {templateUrl: 'pages/all/app/app-components.html', controller: 'MyCtrl1'});
  $routeProvider.when('/mixins', {templateUrl: 'pages/all/app/app-mixins.html', controller: 'MyCtrl2'});
  $routeProvider.when('/docs/mixins', {templateUrl: 'pages/all/app/app-mixins.html', controller: 'MyCtrl2'});
  $routeProvider.when('/utils', {templateUrl: 'pages/all/_/_globals/_utils.html', controller: 'MyCtrl2'});
  $routeProvider.when('/docs/:docName?', { templateUrl:function(params) {
    // if no doc is specified, sets a default value to app-base for the params.
      !params.docName ? params.docName = routeDefaults.docs.defaultPath : params.docName;
      return '/pages/main/docs.html';
    }});
  $routeProvider.when('/demos/:demoName?', { templateUrl:function(params) {
    // if no doc is specified, sets a default value to app-base for the params.
      !params.demoName ? params.demoName = routeDefaults.demos.defaultPath : params.demoName;
      return '/pages/main/demos.html';
    }});
  
  $routeProvider.when('/home', {templateUrl: 'toc.html', controller: 'MyCtrl2'});
  $routeProvider.otherwise({redirectTo: '/home'});
  // Turn on for production.
  // Then need to change the
  // $locationProvider.html5Mode(true);
}])


.controller("MainCtrl", ['$scope','$routeParams', '$location', function($scope,$routeParams,$location) {
  $scope.router = $routeParams;
  var location = $location;
  $scope.location = $location;
  $scope.isMainPageActive = function (urlKey) { return $location.url().doesContain(urlKey)? 'active' : ''; }
  //TODO: need to make it more general here for matching the active page.
  $scope.isActive = function(page){return  $routeParams.docName === page || $routeParams.demoName === page ? 'active' : '';}
}])