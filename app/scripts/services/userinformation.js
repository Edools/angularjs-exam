'use strict';

/**
 * @ngdoc service
 * @name angularApp.userInformation
 * @description
 * # userInformation
 * Service in the angularApp.
 */
angular.module('angularApp')
.service('userInformation', function ($http) {
  this.getInfo = function() {
    return $http({
      method: 'GET',
      url: 'https://api.github.com/users/marcelobarreto'
    });
  };
});
