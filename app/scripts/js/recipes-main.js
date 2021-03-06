// Generated by CoffeeScript 1.10.0
(function() {
  'use strict';
  angular.module('myApp.Recipes', ['ngRoute']).config([
    '$routeProvider', function($routeProvider) {
      $routeProvider.when('/recipes', {
        templateUrl: 'views/recipes.html',
        controller: 'RecipesCtrl'
      });
    }
  ]).controller('RecipesCtrl', [
    '$scope', function($scope) {
      $scope.UnitSelector = "Units";
      $scope.ingredientArray = [];
      $scope.methodArray = [];
      $scope.addIngredient = function() {
        $scope.newIngredient = {
          "name": $scope.ingredientName,
          "amount": $scope.ingredientAmount,
          "units": $scope.ingredientUnit
        };
        $scope.ingredientArray.push($scope.newIngredient);
        return console.log($scope.ingredientArray);
      };
      $scope.removeIngredient = function(ingredient) {
        var index;
        index = $scope.ingredientArray.indexOf(ingredient);
        return $scope.ingredientArray.splice(index, 1);
      };
      $scope.addStep = function() {
        $scope.newStep = {
          "how": $scope.recipeStep.how,
          "Timer": {
            "hasTimer": $scope.hasTimer,
            "Time": $scope.Time
          },
          "hasImage": $scope.recipeStep.hasImage,
          "Image": $scope.recipeStep.Image
        };
        $scope.methodArray.push($scope.newStep);
        return console.log($scope.methodArray);
      };
      return $scope.createRecipe = function() {
        $scope.newRecipe = {
          "Name": $scope.newRecipeName,
          "Author": $scope.newRecipeAuthor,
          "DateCreated": new Date,
          "About": $scope.newRecipeAbout,
          "Ingredients": $scope.ingredientArray,
          "Method": $scope.methodArray
        };
        return console.log($scope.newRecipe);
      };
    }
  ]);

}).call(this);
