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
      }
    };
  }]);