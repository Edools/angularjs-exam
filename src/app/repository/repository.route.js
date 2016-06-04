export function routerConfig ($stateProvider) {
  'ngInject';
  $stateProvider
    .state('repository', {
      url: '/repository/:repository',
      fullname: null,
      templateUrl: 'app/repository/repository.html',
      controller: 'RepositoryController',
      controllerAs: 'vm'
    });
}
