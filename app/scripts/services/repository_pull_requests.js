'use strict';

/**
 * @ngdoc service
 * @name angularApp.RepositoryPullRequests
 * @description
 * # RepositoryPullRequests
 * Service in the angularApp.
 */
angular.module('angularApp')
.factory('RepositoryPullRequests', function ($resource) {
  return $resource('https://api.github.com/repos/:username/:repo/pulls?state=open', {username: '@username', repo: '@repo'}, {
    get: {
      method: 'GET',
      isArray: true
    }
  });
});
