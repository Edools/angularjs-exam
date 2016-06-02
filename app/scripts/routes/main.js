angular.module('edoolsApp')
    .config(mainRouteConfig);

    function mainRouteConfig($routeProvider) {

        var commonRoute = {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl',
            controllerAs: 'main',
            resolve: {
                files: _filesResolve,
                repos: _reposResolve,
                user: _userResolve
            }
        };

        $routeProvider
            .when('/:err?', commonRoute)
            .when('/user/:user', commonRoute)

            .otherwise({
                redirectTo: '/'
            });

        function _filesResolve($ocLazyLoad) {
            return $ocLazyLoad.load([
                'scripts/controllers/main.js',
                'scripts/filters/searchfor.js'
            ]);
        }

        function _userResolve($http, $route, $location) {
            if(! $route.current.params.user) {
                $route.current.params.user = 'Edools';
            }
            return $http.get('https://api.github.com/users/' + $route.current.params.user)
                .then( function(data) { return data.data } )
                .catch( function(err) { return $location.path( "/?err-user" ); } );
        }

        function _reposResolve($http, $route, $location) {
            if(! $route.current.params.user) {
                $route.current.params.user = 'Edools';
            }
            return $http.get('https://api.github.com/users/' + $route.current.params.user + '/repos')
                .then( function(data) { return data.data } )
                .catch( function(err) { return $location.path( "/?err-repo" ); } );
        }

    }
