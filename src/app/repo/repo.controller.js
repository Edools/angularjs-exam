export class RepoController {
  constructor($rootScope, $state, base64, toastr, GithubService, repository, readme) {
    'ngInject';

    let self = this;

    let readmeHtml = base64.decode(readme.data.content)
      .replace(/\.\//g, repository.data.html_url + '/blob/master/');

    self.$rootScope = $rootScope;
    self.$state = $state;
    self.toastr = toastr;
    self.repository = repository.data;
    self.readme = readmeHtml;
    self.GithubService = GithubService;
  }

  urlCopied() {
    let self = this;
    self.toastr.success('Url copiada!')
  }
}
