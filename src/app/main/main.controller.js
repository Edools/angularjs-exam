export class MainController {
  constructor($rootScope, toastr, GithubService) {
    'ngInject';

    let self = this;

    self.$rootScope = $rootScope;
    self.toastr = toastr;
    self.GithubService = GithubService;

    self.reset();

    self.$rootScope.$on('search', (e, name) => {
      self.search(name);
    });
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
    self.page += 1;
    self.search(self.searchText);
  }

  prevPage() {
    let self = this;
    if (!self.hasPrevPage()) return;
    self.page -= 1;
    self.search(self.searchText);
  }

  search(name) {
    let self = this;

    if(!name) {
      self.reset();
      return;
    }

    self.GithubService
      .getReposByName(name, null, null, self.page, self.perPage)
      .then((res) => {
        self.searchText = name;
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
