app.controller('repositoriesCtrl', function($scope, repositoriesFactory){
    $scope.data = {};
    
    repositoriesFactory.call().then(function(data){
       $scope.data = data;
    });
});
