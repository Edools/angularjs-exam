'use strict';

describe('Service: GithubApi', function () {

  // load the service's module
  beforeEach(module('myghApp'));

  // instantiate service
  var GithubApi;
  beforeEach(inject(function (_GithubApi_) {
    GithubApi = _GithubApi_;
  }));

  it('should do something', function () {
    expect(!!GithubApi).toBe(true);
  });

});
