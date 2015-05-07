'use strict';

/**
 * @ngdoc function
 * @name myghApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myghApp
 */
angular.module('myghApp')
  .controller('MainCtrl', [function () {
    var self = this;

    self.user = '';

    self.users = [
      {
        'login': 'html5',
        'id': 0,
        'name': 'HTML5 Boilerplate',
        'public_repos': 10,
        'public_gists': 100
      },
      {
        'login': 'html5',
        'id': 1,
        'name': 'AngularJS',
        'public_repos': 10,
        'public_gists': 100
      },
      {
        'login': 'html5',
        'id': 2,
        'name': 'Yeoman',
        'public_repos': 10,
        'public_gists': 100
      },
      {
        'login': 'html5',
        'id': 3,
        'name': 'Karma',
        'public_repos': 10,
        'public_gists': 100
      }
    ];

    self.setUser = function (id) {
      self.user = self.users[id];
    };
  }]);