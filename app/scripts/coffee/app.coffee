'use strict'
# Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute'
  'myApp.Dashboard'
  'myApp.Recipes'
  'myApp.version'
]).config [
  '$routeProvider'
  ($routeProvider) ->
    $routeProvider.otherwise redirectTo: '/dashboard'
    return
]
