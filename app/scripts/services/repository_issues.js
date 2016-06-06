'use strict';

/**
 * @ngdoc service
 * @name angularApp.RepositoryIssues
 * @description
 * # RepositoryIssues
 * Service in the angularApp.
 */
angular.module('angularApp')
.factory('RepositoryIssues', function ($resource) {
  return $resource('https://api.github.com/repos/:username/:repo/issues?state=open', {username: '@username', repo: '@repo'}, {
    get: {
      method: 'GET',
      isArray: true
    }
  });
});
