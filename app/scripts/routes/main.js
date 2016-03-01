angular.module('edoolsApp')
    .config(mainRouteConfig);

    function mainRouteConfig($routeProvider) {

        $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl',
            controllerAs: 'main',
            resolve: {
                files: _filesResolve,
                user: _userResolve,
                repos: _reposResolve
            }
        })

        .otherwise({
          redirectTo: '/'
        });


        function _filesResolve($ocLazyLoad) {
            return $ocLazyLoad.load([
                'scripts/controllers/main.js'
            ]);
        }

        function _userResolve($http) {
            return $http.get('https://api.github.com/users/Edools')
                .then( function(data) { return data.data } )
                .catch( function(err) { return err } );
        }

        function _reposResolve($http) {
            return $http.get('https://api.github.com/users/Edools/repos')
                .then( function(data) { return data.data } )
                .catch( function(err) { return err } );
        }

    }
