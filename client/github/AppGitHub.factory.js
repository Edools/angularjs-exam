(function() {

  'use strict';

  angular
    .module('AngularGitHub')
    .factory('GitHubAPI', GitHubAPI);

  GitHubAPI.$inject = ['$http'];

  function GitHubAPI ($http) {

    return {
      repos: function (username) {
        return fetchRepos(username);
      }
    };

    function fetchRepos(username) {
      return $http({
        // method: 'JSONP',
        // url: 'github/example.json'
        url: 'https://api.github.com/users/'+username+'/repos'
      })
    };
  }

}) ();
