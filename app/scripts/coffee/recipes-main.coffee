'use strict'
angular.module('myApp.Recipes', [ 'ngRoute' ]).config([
  '$routeProvider'
  ($routeProvider) ->
    $routeProvider.when '/recipes',
      templateUrl: 'views/recipes.html'
      controller: 'RecipesCtrl'
    return
]).controller 'RecipesCtrl', ['$scope', ($scope) ->
	$scope.UnitSelector = "Units"
	$scope.ingredientArray = []
	$scope.methodArray = []

	$scope.addIngredient = () ->
		$scope.newIngredient = {
			"name": $scope.ingredientName
			"amount": $scope.ingredientAmount
			"units": $scope.ingredientUnit
		}
		$scope.ingredientArray.push $scope.newIngredient
		console.log $scope.ingredientArray

	$scope.removeIngredient = (ingredient) ->
		index = $scope.ingredientArray.indexOf(ingredient)
		$scope.ingredientArray.splice(index, 1)

	$scope.addStep = () ->
		$scope.newStep = {
			"how": $scope.recipeStep.how
			"Timer": {
				"hasTimer": $scope.hasTimer
				"Time": $scope.Time
			}
			"hasImage": $scope.recipeStep.hasImage
			"Image": $scope.recipeStep.Image
		}
		$scope.methodArray.push $scope.newStep
		console.log $scope.methodArray

	$scope.createRecipe = () ->
		$scope.newRecipe = {
			"Name": $scope.newRecipeName
			"Author": $scope.newRecipeAuthor
			"DateCreated": new Date 
			#"Image": $scope.newRecipeMainImage
			"About": $scope.newRecipeAbout
			"Ingredients": $scope.ingredientArray
			"Method": $scope.methodArray
		}
		console.log $scope.newRecipe




 ]