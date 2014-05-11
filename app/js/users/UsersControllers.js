'use strict';



angular.module('myApp.users.controllers', [
	"myApp.users.models"
])
.controller('UsersController', 
['$scope', '$routeParams', 'UserRepositoriesModel', 
function($scope, $routeParams, UserRepositoriesModel) {
	
	$scope.$routeParams = $routeParams;
	$scope.repositories = [];
	$scope._loading = true;

	UserRepositoriesModel.query({user: $routeParams.user}, function(data){
		//success
		$scope.repositories = data;
		$scope._loading = false;
	}, function(){
		//error
		$scope._loading = false;
	});


}]);
