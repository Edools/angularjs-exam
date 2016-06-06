'use strict';

/**
 * @ngdoc service
 * @name angularApp.userRepositories
 * @description
 * # userRepositories
 * Service in the angularApp.
 */
angular.module('angularApp')
.factory('UserRepositories', function ($resource) {
  return $resource('http://api.github.com/users/:username/repos', { username: '@username'}, {
    get: {
      method: 'GET',
      isArray: true
    }
  });
});
