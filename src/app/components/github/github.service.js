export class GithubService {
  constructor($http, config) {
    'ngInject';

    this.baseUrl = config.GITHUB_API_URL;
    this.$http = $http;
  }

  getReposByName(name, sort = null, order = null, page = 1, per_page = 15) {
    return this.$http({
      method: 'GET',
      url: this.baseUrl + '/search/repositories',
      params: {
        q: name,
        sort: sort,
        order: order,
        page: page,
        per_page: per_page
      }
    })
  }
}
