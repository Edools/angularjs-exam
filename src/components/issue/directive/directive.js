class Issue {
    constructor() {
        this.restrict = 'E';
        this.scope = {repository: '='};
        this.controller = 'GithubIssueController';
        this.template = '<div class="issue" ng-repeat="(key, value) in issues">' +
                               '<span class="title">{{value.title}}</span> /' +
                           '</div>';
    }

    link($scope, $el, $attr) {
        $scope.$on('open-issue',function(event, data) {
            $scope.showIssues();
        });
    }
}

export default Issue;
