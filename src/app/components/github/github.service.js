export class GithubService {
  constructor($http, config) {
    'ngInject';

    this.$http = $http;
    this.apiHost = config.GITHUB_API;
    this.rawApiHost = config.GITHUB_RAW_API_URL;
  }

  getRepositories(name, page = 1, per_page = 12) {
    return this.$http({
      method: 'GET',
      url: this.apiHost + '/search/repositories',
      params: {
        q: name,
        page: page,
        per_page: per_page
      }
    })
  }


  findRepositoryByName(owner, repo) {
    return this.$http.get(this.apiHost + '/repos/' + owner + '/' + repo);
  }

  getReadme(owner, repo) {
    return this.$http.get(this.apiHost + '/repos/' + owner + '/' + repo + '/readme');
  }

  getIssues(owner, repo) {
    return this.$http.get(this.apiHost + '/repos/' + owner + '/' + repo + '/issues');
  }
}
