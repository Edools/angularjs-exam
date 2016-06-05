'use strict';

describe('Controller: RepositoriesCtrl', function () {

  // load the controller's module
  beforeEach(module('angularApp'));

  var RepositoriesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RepositoriesCtrl = $controller('RepositoriesCtrl', {
      $scope: scope,
      $routeParams: {username: 'marcelobarreto', reponame: 'via_cep'}
    });
  }));

  it('should get the route params', function () {
    expect(scope.username).toBe('marcelobarreto');
    expect(scope.reponame).toBe('via_cep');
  });
});
