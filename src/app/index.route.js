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
      url: '/repo/:owner/:repository',
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
        readme: ['$stateParams', 'GithubService', 'base64',
          ($stateParams, GithubService, base64) => {
            return GithubService
              .getReadme($stateParams.owner, $stateParams.repository)
              .then((res) => {
                return base64.decode(res.data.content)
                  .replace(/\.\//g, 'https://github.com/' + $stateParams.owner + $stateParams.repository + '/blob/master/');
              })
              .catch(() => {
                return '';
              });
          }]
      }
    })
    .state('repo.issue', {
      url: '/issue/:number',
      views: {
        comments: {
          templateUrl: 'app/repo/repo.issue.html'
        }
      }
    });

  $urlRouterProvider.otherwise('/');
}
