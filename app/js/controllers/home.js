app.controller('homeCtrl', function($scope, repositoriesFactory){

	$scope.showSearch = false;
	$scope.issueComment = '';
	$scope.selectedRepo = '';
	$scope.credentials = {};
    
    $scope.callRepos = function(org){
    	$scope.reposList = [];

	    repositoriesFactory.callRepos(org).then(function(data){
	    	console.log(data);
	    	$scope.showSearch = true;
			$scope.reposList = data;
	    });

    }

    $scope.getIssues = function(owner, repo){
    	$scope.issuesList = [];
    	$scope.selectedRepo = repo;

	    repositoriesFactory.getIssues(owner, repo).then(function(data) {
	    	console.log(data);
	    	$scope.showIssues = true;
	    	$scope.issuesList = data;
	    });
    }

    $scope.name = "Ari";
	$scope.sayHello = function() {
		$scope.greeting = "Hello " + $scope.name;
	}

});
