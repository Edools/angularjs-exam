export class RepoController {
  constructor(
    $rootScope,
     $state,
     $stateParams,
     toastr,
     repository,
     issues,
     comments,
     readme) {
    'ngInject';

    let self = this;

    self.$rootScope = $rootScope;
    self.$state = $state;
    self.stateParams = $stateParams;
    self.toastr = toastr;
    self.repository = repository;
    self.issues = issues;
    self.comments = comments;
    self.readme = readme;

    console.log('start');
  }

  urlCopied() {
    let self = this;
    self.toastr.success('Url copiada!')
  }
}
