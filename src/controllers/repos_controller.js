app.controller('ReposController', function ($scope, GithubService, $location, ProjectService) {
  $scope.repos;

  GithubService.getProjects().then(function (response) {
    $scope.repos = response.data;
  });

  $scope.category = 'alphabetic';

  $scope.sortCategory = function (category) {
    $scope.category = category;
  };

   $scope.isActive = function (category) {
     return $scope.category === category;
   };

   $scope.order = function () {
     switch ($scope.category) {
       case 'alphabetic':
        return '';
        break
      case 'news':
       return '-created_at';
      case 'olders':
       return 'created_at';
     };
  }

  $scope.goTo = function (id, name) {
    ProjectService.setName(name);
    $location.path('repos/'+id+'/commits');
  }
})
