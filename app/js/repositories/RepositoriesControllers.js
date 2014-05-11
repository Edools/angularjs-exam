'use strict';



angular.module('myApp.repositories.controllers', [
	"myApp.repositories.models"
])
.controller('RepositoriesController', 
['$scope', 'RepositoriesModel', function($scope, RepositoriesModel) {
	
	$scope.repositories = [];
	$scope._since = 0; 
	$scope._loading = false;

	$scope.more = function(){

		if($scope._loading){
			return false;
		}

		$scope._loading = true;

		RepositoriesModel.query({since: $scope._since}, function(data){
			angular.forEach(data, function(item){
				$scope.repositories.push(item);
			});

			if(data[data.length-1]){
				$scope._since = data[data.length-1].id;
				$scope._loading = false;
			}

		});

	};

	$scope.more();

}]);
