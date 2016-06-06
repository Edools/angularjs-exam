'use strict';

describe('Service: RepositoryIssues', function () {

  // load the service's module
  beforeEach(module('angularApp'));

  // instantiate service
  var RepositoryIssues;
  beforeEach(inject(function (_RepositoryIssues_) {
    RepositoryIssues = _RepositoryIssues_;
  }));

  it('should do something', function () {
    expect(!!RepositoryIssues).toBe(true);
  });

});
