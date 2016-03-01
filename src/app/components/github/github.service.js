export class GithubService {
  constructor($http, config) {
    'ngInject';

    this.baseUrl = config.GITHUB_API_URL;
    this.$http = $http;
  }

  getReposByName(name, sort, order, page) {
    return this.$http({
      method: 'GET',
      url: this.baseUrl + '/search/repositories',
      params: {
        q: name,
        sort: sort,
        order: order,
        page: page
      }
    })
  }
}
