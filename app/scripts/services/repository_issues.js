'use strict';

/**
 * @ngdoc service
 * @name angularApp.RepositoryIssues
 * @description
 * # RepositoryIssues
 * Service in the angularApp.
 */
angular.module('angularApp')
.service('RepositoryIssues', function ($http) {
  this.getIssues = function(username, repo) {
    return $http({
      method: 'GET',
      url: 'https://api.github.com/repos/' + username + '/' + repo + '/issues?state=open'
    });
  };
});
