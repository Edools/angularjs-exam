'use strict';

/**
 * @ngdoc service
 * @name myghApp.GithubApi
 * @description
 * # GithubApi
 * Factory in the myghApp.
 */
angular.module('myghApp')
  .factory('GithubApi', ['$http', function ($http) {
    return {
      searchUsers: function (q) {
        var url = 'https://api.github.com/search/users';
        return $http.get(url, {
          params: {
            q: q
          }
        });
      },
      searchRepo: function (user) {
        var url = 'https://api.github.com/users/' + user + '/repos';
        return $http.get(url, {
          params: {}
        });
      },
      searchIssue: function (user, repo, page) {
        if (!page) {
          page = 1;
        }
        var url = 'https://api.github.com/repos/' + user + '/' + repo + '/issues';
        return $http.get(url, {
          params: {
            page: page,
            state: 'all'
          }
        });
      }
    };
  }]);