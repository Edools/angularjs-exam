class RepositoryService {
    constructor($http) {
        this.search = (query) => {
            return $http.get('https://api.github.com/search/repositories?q=' + query + '&sort=stars&order=desc');
        }
    }
}

export default RepositoryService;
