export class RepositoryController {
  constructor($stateParams, $state, $http, $q, $mdToast) {
    'ngInject';

    this.$stateParams = $stateParams;
    this.$state = $state;
    this.$http = $http;
    this.$q = $q;
    this.$mdToast = $mdToast;

    this.repository = null;
    this.readme = null;
    this.issues = null;

    this.initialize();
  }

  initialize() {
    var fullname = this.$stateParams.repository;
    if (angular.isString(fullname) && fullname.length > 0) {
      this.getRepository(fullname).then(() => {
        this.getReadme(fullname);
        this.getIssues(fullname);
      });
    }
  }

  getRepository(fullname) {
    return this.$http.get('https://api.github.com/repos/' + fullname)
      .then((res) => {
        if (res.data) {
          this.repository = res.data;
        } else {
          throw 'Repository not found';
        }
      })
      .catch(() => {
        this.$state.go('home');
        this.$mdToast.show(
          this.$mdToast.simple()
          .textContent('Error loading repository.')
        );
      });
  }

  getReadme(fullname) {
    let options = {
      headers: {
        'Accept': 'application/vnd.github.3.html'
      }
    };
    return this.$http.get('https://api.github.com/repos/' + fullname + '/readme', options)
      .then((res) => {
        this.readme = res.data;
      })
      .catch(() => {
        this.$mdToast.show(
          this.$mdToast.simple()
          .textContent('Error loading README.')
        );
      });
  }

  getIssues(fullname) {
    return this.$http.get('https://api.github.com/repos/' + fullname + '/issues')
      .then((res) => {
        this.issues = res.data;
      })
      .catch(() => {
        this.$mdToast.show(
          this.$mdToast.simple()
          .textContent('Error loading issues.')
        );
      });
  }

  openIssueDetails(issue) {
    this.$state.go('issue', {
      repository: this.repository.full_name,
      issue: issue.number
    });
  }

}
