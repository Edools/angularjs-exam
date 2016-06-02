angular.module('edoolsApp')
    .config(issuesRouteConfig);

    function issuesRouteConfig($routeProvider) {

        $routeProvider
        .when('/:user/:repos/issues', {
            templateUrl: 'views/issues.html',
            controller: 'IssuesCtrl',
            controllerAs: 'issues',
            resolve: {
                files: _filesResolve,
                issues: _issuesResolve
            }
        });

        function _filesResolve($ocLazyLoad) {
            return $ocLazyLoad.load([
                'scripts/controllers/issues.js'
            ]);
        }

        function _issuesResolve($http, $route) {
            var param = $route.current.params;
            return $http.get('https://api.github.com/repos/' + param.user + '/' + param.repos + '/issues')
                .then( function(data) { return data.data } )
                .catch( function(err) { return err } );
        }

    }
