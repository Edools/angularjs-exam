export function routerConfig ($stateProvider) {
  'ngInject';
  $stateProvider
    .state('about', {
      url: '/about',
      templateUrl: 'app/about/about.html',
      controller: 'AboutController',
      controllerAs: 'vm'
    });
}
