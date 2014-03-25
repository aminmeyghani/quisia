'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/components', {templateUrl: 'pages/all/app/app-components.html', controller: 'MyCtrl1'});
  $routeProvider.when('/mixins', {templateUrl: 'pages/all/app/app-mixins.html', controller: 'MyCtrl2'});
  $routeProvider.when('/docs/mixins', {templateUrl: 'pages/all/app/app-mixins.html', controller: 'MyCtrl2'});
  $routeProvider.when('/docs', {templateUrl: 'pages/main/docs.html', controller: 'MyCtrl2'});

  $routeProvider.when('/utils', {templateUrl: 'pages/all/_/_globals/_utils.html', controller: 'MyCtrl2'});
  $routeProvider.when('/demos/demo1', {templateUrl: 'pages/main/demo1.html', controller: 'MyCtrl2'});
  $routeProvider.when('/x', { templateUrl:function(params) {
      // choose lastModule or defaultModule if none specified
      debugger;
      
      return 'pages/main/demo1.html';
    }});
  $routeProvider.when('/toc', {templateUrl: 'toc.html', controller: 'MyCtrl2'});
  $routeProvider.otherwise({redirectTo: '/toc'});
}]);



