describe('Controller: repoController', function () {
  'use strict';
  // load the controller's module
  beforeEach(module('ngGithub', 'ngGithub.controllers.repos', 'ngGithub.config'));

  var reposController,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    reposController = $controller('reposController', {
      $scope: scope
    });
  }));

  it('should be loading on start', function () {
    expect(scope.loading).toBe(true);
  });

  it('should add repos to the scope on query success', function () {
    var validResponse = {
      items: [{ name: 'angular.js' }]
    };
    scope.onQuerySuccess(validResponse);

    expect(scope.repos).toBeTruthy();
    expect(scope.repos.length).toBeGreaterThan(0);
    expect(scope.loading).toBe(false);
  });

  it('should be warned on query error', function () {
    var err = {
      field: 'q',
      value: 'field_missing'
    };
    scope.onQueryError(err);

    expect(scope.failed).toBe(true);
    expect(scope.loading).toBe(false);
  });
});
