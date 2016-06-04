export class RepositoryController {
  constructor($stateParams, $state, $http, $q, $mdToast) {
    'ngInject';

    this.$stateParams = $stateParams;
    this.$state = $state;
    this.$http = $http;
    this.$q = $q;
    this.$mdToast = $mdToast;
    this.repository = null;

    this.initialize();
  }

  initialize() {
    var fullname = this.$stateParams.fullname;
    if (angular.isString(fullname) && fullname.length > 0) {
      this.getRepository(fullname)
        .then((repository) => {
          this.repository = repository;
        })
        .catch(() => {
          this.$state.go('home');
          this.$mdToast.show(
            this.$mdToast.simple()
            .textContent('Error loading repository.')
          );
        });
    }
  }

  getRepository(fullname) {
    var deferred = this.$q.defer();
    this.$http.get('https://api.github.com/repos/' + fullname)
      .then((res) => {
        if (res.data) {
          deferred.resolve(res.data);
        } else {
          deferred.reject();
        }
      })
      .catch(deferred.reject);
    return deferred.promise;
  }

}
