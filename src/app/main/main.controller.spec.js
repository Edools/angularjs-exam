import getRepositoriesMock from '../mocks/github.http.getRepositories.mock';

describe('controllers', () => {
    let scope, vm, $httpBackend, constants;

    beforeEach(angular.mock.module('githubEdools'));

    beforeEach(inject(($rootScope, $controller, _$httpBackend_, config) => {
        scope = $rootScope.$new();
        vm = $controller('MainController');
        $httpBackend = _$httpBackend_;
        constants = config;
    }));

    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('should start with empty repositories array', () => {
        expect(vm.repos).toEqual([]);
    });

    it('should make a search matching "angular"', () => {
        $httpBackend
            .when('GET', constants.GITHUB_API + '/search/repositories?q=angular')
            .respond(200, getRepositoriesMock);

        scope.$apply(() => {
            vm.searchText = 'angular';
            vm.search();
        });

        $httpBackend.flush();

        expect(vm.repos).toBeTruthy();
        expect(vm.repos.length).toBeGreaterThan(0);
    });
});
