import getReposByNameMock from '../../mocks/github.http.getReposByName.mock.js';
import findRepoByNameMock from '../../mocks/github.http.fingRepoByName.mock';

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
      .when('GET', baseUrl + '/search/repositories?page=1&per_page=15&q=bootstrap')
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

  it('should get bootstrap repo', () => {
    $httpBackend
      .when('GET', baseUrl + '/repos/twbs/bootstrap')
      .respond(200, findRepoByNameMock);

    GithubService.findRepoByName('twbs', 'bootstrap')
      .then((res) => {
        let data = res.data;
        expect(data).toBeTruthy();
        expect(data.name).toBe('bootstrap');
        expect(data.full_name).toBe('twbs/bootstrap');
      });

    $httpBackend.flush();
  });

});
