export class RepoController {
  constructor(_,
              $rootScope,
              $state,
              $stateParams,
              toastr,
              repository,
              issues,
              readme,
              GithubService) {
    'ngInject';

    let self = this;

    self._ = _;
    self.$rootScope = $rootScope;
    self.$state = $state;
    self.$stateParams = $stateParams;
    self.toastr = toastr;
    self.repository = repository;
    self.issues = issues;
    self.readme = readme;
    self.comments = [];
    self.issue = null;
    self.GithubService = GithubService;

    if ($state.params.number)
      self.loadComments($state.params.number);

    let onChangeStart = $rootScope.$on('$stateChangeStart',
      function (event, toState) {
        if (toState.name == 'repo') {
          self.comments = [];
          self.issue = null;
        }
      });

    let onChangeSuccess = $rootScope.$on('$stateChangeSuccess',
      function (event, toState, toParams) {
        if (toState.name == 'repo.issue')
          self.loadComments(toParams.number);
      });

    $rootScope.$on('$destroy', onChangeStart);
    $rootScope.$on('$destroy', onChangeSuccess);
  }

  closeComments() {
    let self = this;
    self.$state.go('repo', {
      owner: self.$stateParams.owner,
      repository: self.$stateParams.repository
    });
  }

  urlCopied() {
    let self = this;
    self.toastr.success('Url copiada!')
  }

  reloadIssues() {
    let self = this;
    self.GithubService.getRepoIssues(
      self.repository.owner.login,
      self.repository.name)
      .then((res) => {
        self.issues = res.data;
      })
  }

  loadComments(issueNumber) {
    let self = this;
    self.GithubService
      .getRepoIssueComments(
        self.repository.owner.login,
        self.repository.name,
        issueNumber
      )
      .then((res) => {
        self.issue = self._.find(self.issues, {number: parseInt(issueNumber)});
        self.comments = res.data;
      })
      .catch(() => {
        self.comments = [];
      });
  }

  comment() {
    let self = this;
    if (!self.commentBody || self.commentBody.length < 1) return;

    self.GithubService.commentIssue(
      self.repository.owner.login,
      self.repository.name,
      self.issue.number,
      self.commentBody
      )
      .then(() => {
        self.commentBody = '';
        self.toastr.success('Comentário realizado com sucesso!');
        self.loadComments(self.issue.number);
      })
  }
}
