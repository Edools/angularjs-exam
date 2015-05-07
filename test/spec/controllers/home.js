describe('Unit: homeCtrl', function(){
	beforeEach(module('edoolsApp'));

	var ctrl, scope;

	beforeEach(inject(function($controller,$rootScope){

		scope = $rootScope.$new();
		ctrl = $controller('homeCtrl', {
			$scope: scope
		});
	}));

	it('should create $scope.greeting when calling sayHello',
		function(){
			expect(scope.greeting).toBeUndefined();
			scope.sayHello();
			expect(scope.greeting).toEqual('Hello Ari');
	})
});