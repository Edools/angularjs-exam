angular.module('githubList')

.controller('mainCtrl', function($scope, mainService, errorService) {
	mainService.getDataGithub()
		.then(data => {
			$scope.data = data
		})
		.catch(error => {
			errorService.dealWithError(error.message)
			alert(error.message)
		})
	
	mainService.getReposGithub()
		.then(data => {
			$scope.repos = data
		})
		.catch(error => {
			errorService.dealWithError(error.message)
			alert(error.message)
		})
})