// Generated by CoffeeScript 1.10.0
(function() {
  'use strict';
  angular.module('myApp.Dashboard', ['ngRoute']).config([
    '$routeProvider', function($routeProvider) {
      $routeProvider.when('/dashboard', {
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardCtrl'
      });
    }
  ]).controller('DashboardCtrl', [
    '$scope', function($scope) {
      return $scope.getRecipes = function() {
        return console.log('shazam');
      };
    }
  ]);

}).call(this);