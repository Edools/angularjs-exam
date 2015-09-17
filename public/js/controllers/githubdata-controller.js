angular.module("AngularJsExam").controller("GitHubDataController", function($scope, $http){

    $scope.gitHubData = [];
    $scope.filtro = '';


        //var promise = $http.get('https://api.github.com/users');
        var promise = $http.get('https://api.github.com/users/mojombo/repos');

        promise.then(function(retorno){
           $scope.gitHubData = retorno.data;
        }).catch(function(error){
           console.log(error);
        });



});

/*
    $scope - injeta dependnecia. Ligação entre o controller e a view
*/
