class Issue {
    constructor() {
        this.restrict = 'E';
        this.scope = {repository: '='};
        this.controller = 'GithubIssueController';
        this.template = '<div class="issue" ng-repeat="(key, value) in issues">' +
                           '<span class="title">{{value.title}}</span> <br><br><br>' +
                       '</div>';
    }
}

export default Issue;
