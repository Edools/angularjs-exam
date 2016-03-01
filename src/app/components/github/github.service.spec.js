import getReposByNameMock from '../../mocks/github.http.getReposByName.mock.js';

describe('service github', function () {

  let $httpBackend, GithubService;
  let baseUrl = 'https://api.github.com';

  beforeEach(angular.mock.module("gitDools"));

  beforeEach(inject((_$httpBackend_, _GithubService_) => {
    $httpBackend = _$httpBackend_;
    GithubService = _GithubService_;
  }));

  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should have GithubService be defined', function () {
    expect(GithubService).toBeDefined();
  });

  it('should get repos that match "bootstrap"', () => {
    $httpBackend
      .when('GET', baseUrl + '/search/repositories?q=bootstrap')
      .respond(200, getReposByNameMock);

    GithubService.getReposByName('bootstrap')
      .then((res)=> {
        let data = res.data;
        expect(data).toBeTruthy();
        expect(data.items.length).toBeGreaterThan(1);
        expect(data.total_count).toBe(54503);
      });

    $httpBackend.flush();
  });

});
