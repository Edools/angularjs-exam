class Repository {
    constructor($interval) {
        this.restrict = 'E';
        this.scope = {item: '='};
        this.controller = 'GithubRepositoryController';
        this.template = '<div class="repository" ng-init="init()">' +
                            '<img ng-src={{item.owner.avatar_url}} width="100" height="100">' +
                            '<span class="title">{{item.full_name}}</span> /' +
                            '<span class="description">{{item.description}}</span>' +
                            '<span class="icon-click open-issue" title="Expandir chamados">' +
                                '<i class="fa fa-expand"></i>' +
                            '</span>' +
                            '<div>' +
                                '<issue repository="item"/>' +
                            '</div>' +
                        '</div>';
         this.$interval = $interval;
    }

    controller ($scope, $state)  {
        $scope. state = $state ;
    }

    link($scope, $el, $attr) {
        $el.find('i').on('click', function(event){
            $scope.$broadcast('open-issue');
        });
    }
}

export default Repository;
