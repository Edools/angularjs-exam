'use strict';

/**
 * @ngdoc function
 * @name myghApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myghApp
 */
angular.module('myghApp')
  .controller('MainCtrl', ['GithubModel', function (GithubModel) {

    var gm = this.gm = GithubModel;
    var self = this;
    self.user = '';

    self.searchUser = function (user) {
      gm.searchUserName(user);
    };

  }]);