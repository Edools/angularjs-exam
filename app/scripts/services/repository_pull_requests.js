'use strict';

/**
 * @ngdoc service
 * @name angularApp.RepositoryPullRequests
 * @description
 * # RepositoryPullRequests
 * Service in the angularApp.
 */
angular.module('angularApp')
.service('RepositoryPullRequests', function ($http) {
  this.getPullRequests = function(username, repo) {
    return $http({
      method: 'GET',
      url: 'https://api.github.com/repos/' + username + '/' + repo + '/pulls?state=open'
    });
  };
});
