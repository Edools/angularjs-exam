'use strict';

describe('Service: UserInformation', function () {

  // load the service's module
  beforeEach(module('angularApp'));

  // instantiate service
  var UserInformation;
  beforeEach(inject(function (_UserInformation_) {
    UserInformation = _UserInformation_;
  }));

  it('should do something', function () {
    expect(!!UserInformation).toBe(true);
  });

});
