'use strict';

/**
 * @ngdoc service
 * @name angularApp.userRepositories
 * @description
 * # userRepositories
 * Service in the angularApp.
 */
angular.module('angularApp')
.service('userRepositories', function ($http) {
  this.getRepositories = function() {
    return $http({
      method: 'GET',
      url: 'https://api.github.com/users/marcelobarreto/repos'
    });
  };
});
