// Generated by CoffeeScript 1.10.0
(function() {
  'use strict';
  angular.module('myApp', ['ngRoute', 'myApp.Dashboard', 'myApp.Recipes', 'myApp.version']).config([
    '$routeProvider', function($routeProvider) {
      $routeProvider.otherwise({
        redirectTo: '/dashboard'
      });
    }
  ]);

}).call(this);
