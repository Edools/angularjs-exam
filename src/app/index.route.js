export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .state('repository', {
		url: '/repository/:owner/:name',
		templateUrl: 'app/repository/repository.html',
		controller: 'RepositoryController',
		controllerAs: 'repository'
	})
    .state('repository.issue', {
		url: '/issue/:number',
		views: {
			'modal': {
				templateUrl: 'app/repository/repository.issue.html'
			}
		}
	});
    
	$urlRouterProvider.otherwise('/');
}
