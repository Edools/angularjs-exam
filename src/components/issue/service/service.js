class IssueService {
    constructor($http) {
        this.search = (urlIssue, callbackSucess, callbackError) => {
            return $http.get(urlIssue);
        }
    }
}

export default IssueService;
