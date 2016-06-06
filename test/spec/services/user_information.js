'use strict';

describe('Service: UserInformations', function () {

  // load the service's module
  beforeEach(module('angularApp'));

  // instantiate service
  var UserInformations;
  beforeEach(inject(function (_UserInformations_) {
    UserInformations = _UserInformations_;
  }));

  it('should do something', function () {
    expect(!!UserInformations).toBe(true);
  });

});
