export class MainController {
    constructor($rootScope, $state, toastr, GithubService) {
        'ngInject';


        let self = this;

        self.$rootScope = $rootScope;
        self.$state = $state;
        self.toastr = toastr;
        self.github = GithubService;

        self.clear();

        if (self.$state.params.text)
            self.searchText = self.$state.params.text;

        if (self.$state.params.page)
            self.page = parseInt(self.$state.params.page);

        self.search();

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
        self.$state.go('home', {
            text: self.searchText,
            page: self.page + 1
        });
    }

    previous() {
        let self = this;
        if (!self.hasPrev()) return;
        self.$state.go('home', {
            text: self.searchText,
            page: self.page - 1
        });
    }


    search(name) {
        let self = this;

        if (!name) {
            self.clear();
            return;
        }

        self.github
            .getRepositories(self.searchText, self.page, self.perPage)
            .then((res) => {
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