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
      user: null
    };
    gm.searchUserName = function () {
      gm.searchUser = true;

      GithubApi.searchUsers(gm.userName)
        .success(function (data) {
          gm.users = data.items;
          console.log(data);
        })
        .error(function () {
          console.error('GET ERROR');
        });
    };

    return gm;
  }]);