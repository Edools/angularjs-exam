'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('myghApp'));

  var ctrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller) {
    ctrl = $controller('MainCtrl');
  }));

  it('should number of users on load', function () {
    expect(ctrl.users.length).toBe(4);
  });
});
