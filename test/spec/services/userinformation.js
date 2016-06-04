'use strict';

describe('Service: userInformation', function () {

  // load the service's module
  beforeEach(module('angularApp'));

  // instantiate service
  var userInformation;
  beforeEach(inject(function (_userInformation_) {
    userInformation = _userInformation_;
  }));

  it('should do something', function () {
    expect(!!userInformation).toBe(true);
  });

});
