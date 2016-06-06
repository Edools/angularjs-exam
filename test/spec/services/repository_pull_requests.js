'use strict';

describe('Service: RepositoryPullRequests', function () {

  // load the service's module
  beforeEach(module('angularApp'));

  // instantiate service
  var RepositoryPullRequests;
  beforeEach(inject(function (_RepositoryPullRequests_) {
    RepositoryPullRequests = _RepositoryPullRequests_;
  }));

  it('should do something', function () {
    expect(!!RepositoryPullRequests).toBe(true);
  });

});
