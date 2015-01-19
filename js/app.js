var script;
var counter = 0;
var scope;

function _processSearch (response)
{
	scope = getAngularScope();
	scope.$apply(function () 
	{
		scope.processSearch(response);
	});
}

function _connectToRepo (response)
{
	scope = getAngularScope();
	scope.$apply(function () 
	{
		scope.connectToRepo(response);
	});
}

function Search ()
{

}

function getAngularScope ()
{
	myDiv = document.getElementById("upperBody");
	temp = angular.element(myDiv).scope();

	return temp;
}

function addFiles (data) 
{
	dt = {text: data};
	$scope.files.push(dt);
}



/*
	--- AngularJS Modules ---
*/

angular.module('searchGithub', [])
	.controller('SearchController', ['$scope', '$window', '$http', function($scope, $window, $http){
		$scope.files = [];

		$scope.repository = "your repository!";

		$scope.lastUser = "";
		$scope.lastRepo = "";

		$scope.init = function () 
		{
			if ($scope.username != $scope.lastUser)
			{
				$scope.lastUser = $scope.username;
				$scope.lastRepo = $scope.repoName;   	

				script = document.createElement('script');
				script.src = "https://api.github.com/repos/"+ $scope.lastUser + "/" + $scope.lastRepo + "?callback=_connectToRepo";

				document.getElementsByTagName('head')[0].appendChild(script);
			}	
		};

		$scope.connectToRepo = function (response) 
		{
		  	var data = response.data;

			if (data.message == "Not Found")  	
			{
				$window.alert("Repository not found.\nPlease verify username and repo name.");
			}
			else
			{
				repository = data.full_name;
				document.getElementById('lowerBody').style.display = 'block';
			}
		};

		$scope.processSearch = function (response) 
		{
		  	var data = response.data;
		  	console.log(data);
		  	list = data.items;
		  	$scope.resetList();

		  	for (i = 0; i < list.length; i++)
		  	{
		  		t = {text: list[i].name + " - PATH: (" + list[i].path + ")"};
		  		$scope.addItem(t);
		  	}
		};

		$scope.resetList = function ()
		{
			$scope.files = [];
		}

		$scope.addItem = function (item)
		{
			$scope.files.push(item);
		}

		$scope.startSearch = function ()
		{
			_fileName = $scope.fileName;

			script = document.createElement('script');
			script.src = "https://api.github.com/search/code?q=" + _fileName + "+in:path+repo:" + $scope.username + "/" + $scope.repoName + "&callback=_processSearch";

			document.getElementsByTagName('head')[0].appendChild(script);
		};
	}]);