angular.module('myApp', ['ngRoute','myApp.filters','myApp.services','myApp.directives','myApp.controllers'])
.config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider) {
  var routeDefaults = {
    docs : {
      name : 'doc',
      defaultPath : 'app-mixins'
    },
    demos : {
      name : 'demos',
      defaultPath : 'buttons'
    }
  };
  $routeProvider.when('/components', {templateUrl: 'documentations/app/app-components.htm', controller: 'MyCtrl1'});
  $routeProvider.when('/mixins', {templateUrl: 'documentations/app/app-mixins.htm', controller: 'MyCtrl2'});
  $routeProvider.when('/docs/mixins', {templateUrl: 'documentations/app/app-mixins.htm', controller: 'MyCtrl2'});
  $routeProvider.when('/utils', {templateUrl: 'documentations/_/_globals/_utils.htm', controller: 'MyCtrl2'});
  $routeProvider.when('/docs/:docName?', { templateUrl:function(params) {
    // if no doc is specified, sets a default value to app-base for the params.
      !params.docName ? params.docName = routeDefaults.docs.defaultPath : params.docName;
      return 'routes/docs.htm';
    }});
  $routeProvider.when('/demos/:demoName?', { templateUrl:function(params) {
    // if no doc is specified, sets a default value to app-base for the params.
      !params.demoName ? params.demoName = routeDefaults.demos.defaultPath : params.demoName;
      return 'routes/demos.htm';
    }});
  
  $routeProvider.when('/home', {templateUrl: 'toc.htm', controller: 'MyCtrl2'});
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