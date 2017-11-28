(function() {
    'use strict';

    angular
        .module('testeFrontEnd')
        .factory('githubRepos', githubRepos);

    /** @ngInject */
    function githubRepos($log, $http) {
        var apiHost = 'https://api.github.com';
        var apiSearchHost = '/search/repositories';
        var apiReposHost = '/repos/';
        var apiRepoReadme = '/readme';
        var apiRepoIssues = '/issues';

        var service = {
            apiHost: apiHost,
            getReposByTerm: getReposByTerm,
            getRepository: getRepository,
            getRepositoryReadme: getRepositoryReadme,
            getRepositoryIssues: getRepositoryIssues
        };

        return service;

        //////////////

        function getReposByTerm(term, sort, order, page, limit) {
            if (!limit) {
                limit = 30;
            }

            if (!page) {
                page = 1;
            }

            if (!sort) {
                sort = null;
            }

            if (!order) {
                order = "desc";
            }

            var paramsSearch = {
                q: term,
                sort: sort,
                order: order,
                page: page,
                per_page: limit
            };

            return $http.get(apiHost + apiSearchHost, {
                    params: paramsSearch
                })
                .then(getOnComplete)
                .catch(getOnFailed);
        }

        function getRepository(fullname) {
            return $http.get(apiHost + apiReposHost + fullname)
                .then(getOnComplete)
                .catch(getOnFailed);
        }

        function getRepositoryReadme(fullname) {
            return $http.get(apiHost + apiReposHost + fullname + apiRepoReadme)
                .then(getOnComplete)
                .catch(getOnFailed);
        }

        function getRepositoryIssues(fullname) {
            return $http.get(apiHost + apiReposHost + fullname + apiRepoIssues)
                .then(getOnComplete)
                .catch(getOnFailed);
        }

        function getOnComplete(response) {
            return response.data;
        }

        function getOnFailed(error) {
            $log.error('XHR Failed for getRepos.\n' + angular.toJson(error.data, true));
        }

    }
})();