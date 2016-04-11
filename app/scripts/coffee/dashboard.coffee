'use strict'
angular.module('myApp.Dashboard', [ 'ngRoute' ]).config([
  '$routeProvider'
  ($routeProvider) ->
    $routeProvider.when '/dashboard',
      templateUrl: 'views/dashboard.html'
      controller: 'DashboardCtrl'
    return
]).controller 'DashboardCtrl', ['$scope', ($scope) ->
	$scope.getRecipes = () ->
		console.log 'shazam'

	
 ]