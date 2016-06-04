export function routerConfig ($stateProvider) {
  'ngInject';
  $stateProvider
    .state('issue', {
      url: '/issue/:repository/:issue',
      fullname: null,
      templateUrl: 'app/issue/issue.html',
      controller: 'IssueController',
      controllerAs: 'vm'
    });
}
