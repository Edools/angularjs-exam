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
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      },
      searchUsers: function (q) {
        var url = 'https://api.github.com/search/users';
        return $http.get(url, {
          params: {
            q: q
          }
        });
      }
    };
  }]);