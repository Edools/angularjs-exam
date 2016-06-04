export class MainController {
    constructor($rootScope, toastr, GithubService) {
        'ngInject';


        let self = this;

        self.$rootScope = $rootScope;
        self.toastr = toastr;
        self.github = GithubService;

        self.clear();

        self.$rootScope.$on('search', (e, name) => {
            self.search(name);
        });

    }

    clear() {
        this.repos = [];
        this.count = 0;
        this.page = 1;
        this.pageCount = 0;
        this.perPage = 12;
        this.searchText = '';
    }

    hasNext() {
        return this.pageCount > this.page;
    }

    hasPrev() {
        return this.page > 1;
    }

    next() {
        let self = this;
        if (!self.hasNext()) return;
        self.page += 1;
        self.search(self.searchText);
    }

    previous() {
        let self = this;
        if (!self.hasPrev()) return;
        self.page -= 1;
        self.search(self.searchText);
    }


    search(name) {
        let self = this;

        if (!name) {
            self.clear();
            return;
        }

        self.github
            .getRepositories(name, self.page, self.perPage)
            .then((res) => {
                self.searchText = name;
                self.count = res.data.total_count;
                self.pageCount = Math.ceil(self.count / self.perPage);
                self.repos = res.data.items;
            })
            .catch((res) => {
                self.toastr.error(res.data.message, {
                    timeOut: 10000
                });
                self.clear();
            });
    }
}