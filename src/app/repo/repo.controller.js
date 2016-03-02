export class RepoController {
  constructor($rootScope, $state, $stateParams, toastr, repository, issues, readme) {
    'ngInject';

    let self = this;

    self.$rootScope = $rootScope;
    self.$state = $state;
    self.toastr = toastr;
    self.repository = repository;
    self.issues = issues;
    self.readme = readme;
  }

  urlCopied() {
    let self = this;
    self.toastr.success('Url copiada!')
  }
}
