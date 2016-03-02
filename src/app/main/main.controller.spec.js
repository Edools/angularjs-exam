import getReposByNameMock from '../mocks/github.http.getReposByName.mock.js';

describe('controllers', () => {
  let scope, vm, $httpBackend, config;

  beforeEach(angular.mock.module('gitDools'));

  beforeEach(inject(($rootScope, $controller, _$httpBackend_, _config_) => {
    scope = $rootScope.$new();
    vm = $controller('MainController');
    $httpBackend = _$httpBackend_;
    config = _config_;
  }));

  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should start with empty repositories array', () => {
    expect(vm.repositories).toEqual([]);
  });

  it('should make a search matching "bootstrap"', () => {
    $httpBackend
      .when('GET', config.GITHUB_API_URL + '/search/repositories?page=1&per_page=15&q=bootstrap')
      .respond(200, getReposByNameMock);

    scope.$apply(() => {
      vm.searchText = 'bootstrap';
      vm.search();
    });

    $httpBackend.flush();

    expect(vm.repositories).toBeTruthy();
    expect(vm.repositories.length).toBeGreaterThan(0);

  });
});
