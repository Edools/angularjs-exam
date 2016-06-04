import getRepositoriesMock from '../../mocks/github.http.getRepositories.mock';
import findRepositoryByNameMock from '../../mocks/github.http.fingRepositoryByName.mock';

describe('service github', function() {

    let $httpBackend, GithubService;
    let apiHost = 'https://api.github.com';

    beforeEach(angular.mock.module("githubEdools"));

    beforeEach(inject((_$httpBackend_, _GithubService_) => {
        $httpBackend = _$httpBackend_;
        GithubService = _GithubService_;
    }));

    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('should have GithubService be defined', function() {
        expect(GithubService).toBeDefined();
    });

    it('should get repos that match "angular"', () => {
        $httpBackend
            .when('GET', apiHost + '/search/repositories?page=1&per_page=12&q=angular')
            .respond(200, getRepositoriesMock);

        GithubService.getRepositories('angular')
            .then((res) => {
                let data = res.data;
                expect(data).toBeTruthy();
                expect(data.items.length).toBeGreaterThan(1);
                expect(data.total_count).toBe(131177);
            });

        $httpBackend.flush();
    });
    
   it('should get bootstrap repo', () => {
     $httpBackend
       .when('GET', apiHost + '/repos/twbs/bootstrap')
       .respond(200, findRepositoryByNameMock);
 
     GithubService.findRepositoryByName('twbs', 'bootstrap')
       .then((res) => {
         let data = res.data;
         expect(data).toBeTruthy();
         expect(data.name).toBe('bootstrap');
         expect(data.full_name).toBe('twbs/bootstrap');
       });
 
     $httpBackend.flush();
   });
 

});