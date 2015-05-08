describe('Unit: homeCtrl', function(){
	beforeEach(module('edoolsApp'));

	var ctrl, scope, repositoriesFactory;

	beforeEach(inject(function($controller, $rootScope, $injector, _$httpBackend_){
		scope = $rootScope.$new();
		homeCtrl = $controller('homeCtrl', {
			$scope: scope
		});
		repositoriesFactory = $injector.get('repositoriesFactory');
		$httpBackend = _$httpBackend_;
	}));

	it('should have a homeCtrl controller', function() {
		expect(homeCtrl).toBeDefined();
	});

	it('should have a working repositoriesFactory factory', function(){
		expect(repositoriesFactory.callRepos).toBeDefined();
		expect(repositoriesFactory.getIssues).toBeDefined();
	});
});