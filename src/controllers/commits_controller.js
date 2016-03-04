app.controller('CommitsController', function ($scope, $location, GithubService, ProjectService) {

  GithubService.getCommits(ProjectService.getName()).then(function (response) {
    $scope.commits = response.data;
    console.log(response.data);
  });

  $scope.project = ProjectService.getName();

});
