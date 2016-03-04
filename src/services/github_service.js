app.service('GithubService', function ($http) {

  return ({
    getProjects: function () {
      return $http.get('https://api.github.com/users/edools/repos').then(function (data) {
        return data;
      });
    },
    getCommits: function (repository) {
      return $http.get('https://api.github.com/repos/edools/'+repository+'/commits').then(function (data) {
        return data;
      });
    }
  });
});
