'use strict';

/**
 * @ngdoc service
 * @name angularApp.Repository
 * @description
 * # Repository
 * Service in the angularApp.
 */

angular.module('angularApp')
.factory('Repository', function ($resource) {
  return $resource('https://api.github.com/repos/:username/:repo', {username: '@username', repo: '@repo'}, {
    get: {
      method: 'GET',
      isArray: false
    }
  });
});
