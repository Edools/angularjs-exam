export function routerConfig($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/:text?page',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .state('repo', {
      url: '/repo/:owner/:repository/:issue',
      templateUrl: 'app/repo/repo.html',
      controller: 'RepoController',
      controllerAs: 'repo',
      resolve: {
        repository: ['$stateParams', 'GithubService',
          ($stateParams, GithubService) => {
            return GithubService
              .findRepoByName($stateParams.owner, $stateParams.repository)
              .then((res) => {
                return res.data;
              })
              .catch(() => {
                return null;
              });
          }],
        issues: ['$stateParams', 'GithubService',
          ($stateParams, GithubService) => {
            return GithubService
              .getRepoIssues($stateParams.owner, $stateParams.repository)
              .then((res) => {
                return res.data;
              })
              .catch(() => {
                return null;
              });
          }],
        comments: ['$stateParams', 'GithubService',
          ($stateParams, GithubService) => {

            if(!$stateParams.issue) {
              return null;
            }

            return GithubService
              .getRepoIssueComments($stateParams.owner, $stateParams.repository, $stateParams.issue)
              .then((res) => {
                return res.data;
              })
              .catch(() => {
                return null;
              });
          }],
        readme: ['$stateParams', 'GithubService', 'base64',
          ($stateParams, GithubService, base64) => {
            return GithubService
              .getReadme($stateParams.owner, $stateParams.repository)
              .then((res) => {
                return base64.decode(res.data.content)
                  .replace(/\.\//g, 'https://github.com/' + $stateParams.owner +  $stateParams.repository + '/blob/master/');
              })
              .catch(() => {
                return '';
              });
          }]
      }
    });

  $urlRouterProvider.otherwise('/');
}
