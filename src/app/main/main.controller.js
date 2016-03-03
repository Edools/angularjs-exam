export class MainController {
  constructor($rootScope, $state, toastr, GithubService) {
    'ngInject';

    let self = this;

    self.$rootScope = $rootScope;
    self.$state = $state;
    self.toastr = toastr;
    self.GithubService = GithubService;

    self.reset();

    if (self.$state.params.text)
      self.searchText = self.$state.params.text;

    if (self.$state.params.page)
      self.page = parseInt(self.$state.params.page);

    self.search();
  }

  reset() {
    this.repositories = [];
    this.count = 0;
    this.page = 1;
    this.pageCount = 0;
    this.perPage = 15;
    this.searchText = '';
  }

  hasNextPage() {
    return this.pageCount > this.page;
  }

  hasPrevPage() {
    return this.page > 1;
  }

  nextPage() {
    let self = this;
    if (!self.hasNextPage()) return;
    self.$state.go('home', {
      text: self.searchText,
      page: self.page + 1
    });
  }

  prevPage() {
    let self = this;
    if (!self.hasPrevPage()) return;
    self.$state.go('home', {
      text: self.searchText,
      page: self.page - 1
    });
  }

  search() {
    let self = this;

    if (!self.searchText) {
      self.reset();
      return;
    }

    self.GithubService
      .getReposByName(self.searchText, null, null, self.page, self.perPage)
      .then((res) => {
        self.count = res.data.total_count;
        self.pageCount = Math.ceil(self.count / self.perPage);
        self.repositories = res.data.items;
      })
      .catch((res) => {
        self.toastr.error(res.data.message, {timeOut: 10000});
        self.reset();
      });
  }
}
