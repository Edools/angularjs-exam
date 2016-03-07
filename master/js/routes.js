(function () {
    'use strict';
    var config = function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/search");

        $urlRouterProvider.when("", ['$state', function ($state) {
            $state.go('anon.search');
        }]);

        $stateProvider.state('anon', {
            abstract: true,
            template: '<ui-view></ui-view>'
        });

        $stateProvider.state('anon.search', {
            url: "/search",
            templateUrl: "app/views/search.html",
            controller: 'SearchController as vm',
            data: {
                isPublic: true,
                pageTitle: 'Busca GitHub'
            }
        });
    };

    angular.module('edools')
        .config(['$stateProvider', '$urlRouterProvider', config]);
}());