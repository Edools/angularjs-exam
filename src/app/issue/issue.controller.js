export class IssueController {
  constructor($stateParams, $state, $http, $mdToast, moment) {
    'ngInject';

    this.$stateParams = $stateParams;
    this.$state = $state;
    this.$http = $http;
    this.$mdToast = $mdToast;
    this.moment = moment;

    this.issue = null;
    this.comments = [];

    this.initialize();
  }

  initialize() {
    var fullname = this.$stateParams.repository;
    var number = this.$stateParams.issue;

    if (angular.isString(fullname) && fullname.length > 0) {
      if (angular.isString(number) && number.length > 0) {
        this.getIssue(fullname, number)
          .then((issue) => {
            this.getComents(issue)
          });
      }
    }
  }

  getIssue(fullname, number) {
    let options = {
      headers: {
        'Accept': 'application/vnd.github.3.html'
      }
    };
    return this.$http.get('https://api.github.com/repos/' + fullname + '/issues/' + number, options)
      .then((res) => {
        if (res.data) {
          this.issue = res.data;
          return this.issue;
        } else {
          throw 'Issue not found';
        }
      })
      .catch(() => {
        this.$state.go('home');
        this.$mdToast.show(
          this.$mdToast.simple()
          .textContent('Error loading issue.')
        );
      });
  }

  getComents(issue) {
    let options = {
      headers: {
        'Accept': 'application/vnd.github.3.html'
      }
    };
    return this.$http.get(issue.comments_url, options)
      .then((res) => {
        this.comments = res.data;
      })
      .catch(() => {
        this.$mdToast.show(
          this.$mdToast.simple()
          .textContent('Error loading issues.')
        );
      });
  }

  getDate(date){
    return this.moment(date).format('MMM Do YY');
  }

}
