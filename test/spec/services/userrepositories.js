'use strict';

describe('Service: userRepositories', function () {

  // load the service's module
  beforeEach(module('angularApp'));

  // instantiate service
  var userRepositories;
  beforeEach(inject(function (_userRepositories_) {
    userRepositories = _userRepositories_;
  }));

  it('should do something', function () {
    expect(!!userRepositories).toBe(true);
  });

});
