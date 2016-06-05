'use strict';

describe('Service: UserRepositories', function () {

  // load the service's module
  beforeEach(module('angularApp'));

  // instantiate service
  var UserRepositories;
  beforeEach(inject(function (_UserRepositories_) {
    UserRepositories = _UserRepositories_;
  }));

  it('should do something', function () {
    expect(!!UserRepositories).toBe(true);
  });

});
