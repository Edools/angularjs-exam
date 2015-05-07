'use strict';

/**
 * @ngdoc service
 * @name myghApp.GithubModel
 * @description
 * # GithubModel
 * Factory in the myghApp.
 */
angular.module('myghApp')
  .factory('GithubModel', ['GithubApi', function (GithubApi) {
    var gm = {
      userName: '',
      searchUser: false,
      users: [],
      showUsers: false,
      user: null,
      searchRepo: false,
      repos: [],
      repo: null
    };

    gm.searchUserName = function () {
      gm.searchUser = true;

      GithubApi.searchUsers(gm.userName)
        .success(function (data) {
          gm.searchUser = true;
          gm.users = data.items;
          gm.showUsers = true;
        })
        .error(function () {
          console.error('USERS GET ERROR');
        });

      console.log('searchUserName');
    };

    gm.setUser = function (user) {
      gm.user = user;
      gm.userName = user.login;
      gm.showUsers = false;

      console.log('setUser');
    };

    gm.searchUserRepos = function () {
      gm.searchRepo = true;

      GithubApi.searchRepo(gm.user.login)
        .success(function (data) {
          gm.searchRepo = true;
          gm.repos = data;
        })
        .error(function () {
          console.error('REPOS GET ERROR');
        });

      console.log('searchUserRepos');
    };

    return gm;
  }]);