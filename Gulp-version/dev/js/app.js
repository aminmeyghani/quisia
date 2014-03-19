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
  $routeProvider.otherwise({redirectTo: '/components'});
}]);
