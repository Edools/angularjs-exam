export class MainController {
  constructor($rootScope, toastr, GithubService) {
    'ngInject';

    this.repositories = [];
    this.$rootScope = $rootScope;
    this.toastr = toastr;
    this.GithubService = GithubService;

    let self = this;

    this.$rootScope.$on('search', (e, name) => {
      self.search(name);
    });
  }

  search(name) {
    let self = this;
    self.GithubService
      .getReposByName(name)
      .then((res) => {
        self.repositories = res.data.items;
      });
  }
}
