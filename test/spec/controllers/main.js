'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('angularApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should have a default username', function () {
    expect(scope.username).toBe('marcelobarreto');
  });

  it('should have a default limit visualization value', function () {
    expect(scope.limitVisualization).toBe(5);
  });
});
