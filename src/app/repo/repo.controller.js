export class RepoController {
  constructor($rootScope, $state, $stateParams, base64, toastr, GithubService, repository) {
    'ngInject';

    let self = this;

    GithubService
      .getReadme($stateParams.owner, $stateParams.id)
      .then((res) => {
        self.readme = base64.decode(res.data.content)
          .replace(/\.\//g, repository.data.html_url + '/blob/master/');
      });


    self.$rootScope = $rootScope;
    self.$state = $state;
    self.toastr = toastr;
    self.repository = repository.data;

    self.GithubService = GithubService;
  }

  urlCopied() {
    let self = this;
    self.toastr.success('Url copiada!')
  }
}
