angular.module('githubList')

.controller('mainCtrl', function($scope, mainService) {
	mainService.getDataGithub()
		.then(data => {
			$scope.data = data
		})
		.catch(err => console.log(err))
	
	mainService.getReposGithub()
		.then(data => {
			$scope.repos = data
		})
		.catch(err => console.log(err))
})