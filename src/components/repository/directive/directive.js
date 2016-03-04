class Repository {
    constructor($interval) {
        this.scope = {item: '='};
        this.controller = 'GithubRepositoryController';
        this.template = '<div class="repository" ng-init="init()">' +
                            '<img ng-src={{item.owner.avatar_url}} width="100" height="100">' +
                            '<span class="title">{{item.full_name}}</span> /' +
                            '<span class="description">{{item.description}}</span>' +
                            '<span class="icon-click open-issue" title="Expandir chamados">' +
                                '<i class="fa fa-expand"></i>' +
                            '</span>' +
                            '<div ng-show="{{isIssueVisible}}">' +
                                '<Issue repository="item"/>' +
                            '</div>' +
                        '</div>';
         this.bindToController = true;
         this.$interval = $interval;
    }

    link($scope, $el, $attr) {
        console.log('XUUUU LINK')
        $el.find('i').on('click', function(event){
            $scope.$broadcast('open-issue');
            $scope.isIssueVisible = true;
        });
    }
}

export default Repository;
