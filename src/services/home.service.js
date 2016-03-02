import angular from 'angular';

class ElasticGit {
  constructor($http) {
    this.$http = $http;
  }

  getRepos() {
    let secret_token = 'client_id=0c278b28c4cf46e2e3bc&client_secret=783526f3612d6a832e783f171bd2af28b779c263';
    return this.$http.get('https://api.github.com/users/elastic/repos?'+secret_token);
  }
}

export default angular.module('services.elastic-git', [])
  .service('elasticGit', ElasticGit)
  .name;
