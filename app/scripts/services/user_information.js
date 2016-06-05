'use strict';

/**
 * @ngdoc service
 * @name angularApp.userInformation
 * @description
 * # userInformation
 * Service in the angularApp.
 */
angular.module('angularApp')
.factory('UserInformations', function ($resource) {
  return $resource('https://api.github.com/users/:username', { username: '@username'}, {
    get: {
      method: 'GET',
      isArray: false
    }
  });
});
