'use strict';

describe('Service: GithubModel', function () {

  // load the service's module
  beforeEach(module('myghApp'));

  // instantiate service
  var GithubModel;
  beforeEach(inject(function (_GithubModel_) {
    GithubModel = _GithubModel_;
  }));

  it('should do something', function () {
    expect(!!GithubModel).toBe(true);
  });

});
