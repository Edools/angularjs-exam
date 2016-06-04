export function routerConfig ($stateProvider) {
  'ngInject';
  $stateProvider
    .state('repository', {
      url: '/repository?fullname',
      fullname: null,
      templateUrl: 'app/repository/repository.html',
      controller: 'RepositoryController',
      controllerAs: 'vm'
    });
}
