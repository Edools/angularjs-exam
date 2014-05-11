'use strict';



angular.module('myApp.issues.controllers', [
	"myApp.issues.models"
])
.controller('IssuesController', 
['$scope', '$routeParams', 'IssuesModel', 'IssuesCommentsModel', 
function($scope, $routeParams, IssuesModel, IssuesCommentsModel) {
	
	$scope._loading = true;
	$scope.issues = [];
	$scope.$routeParams = $routeParams;
	var params = $routeParams;

	IssuesModel.query(params, function(data){
		$scope.issues = data;

		angular.forEach($scope.issues, function(item){
			item.comments = [];
			params.number = item.number;
			IssuesCommentsModel.query(params, function(data){
				item.comments = data;
				console.log(data);
			});
		});

		$scope._loading = false;
	}, function(){
		$scope._loading = false;
	});


	$scope.remove = function(item){
		var index = $scope.issues.indexOf(item);
		console.log(index);
		$scope.issues.splice(index,1);
	}

}]);
