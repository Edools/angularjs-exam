'use strict';

describe('Service: Repository', function () {

  // load the service's module
  beforeEach(module('angularApp'));

  // instantiate service
  var Repository;
  beforeEach(inject(function (_Repository_) {
    Repository = _Repository_;
  }));

  it('should do something', function () {
    expect(!!Repository).toBe(true);
  });

});
