'use strict';

/**
 * @ngdoc function
 * @name queroTrabalharNoEdoolsFrontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the queroTrabalharNoEdoolsFrontendApp
 */
angular.module('queroTrabalharNoEdoolsFrontendApp')
.controller('MainCtrl', function (User, $scope) {
  $scope.takeUser = function (user) {
    User.info(user)
      .success(function (response) {
        $scope.userInfo = response;
      })
      .error(function (error) {
        $scope.error = error
      });
  };
});
