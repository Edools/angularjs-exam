/*********************************************************************
*
*  auth
*  authentication controller
*
*********************************************************************/
angular
  .module('ngGithub.controllers', [])
  .controller('authController', function ($scope, authFactory) {
    $scpoe.login = function () {
      authFactory.login()
        .success(function (response) {
          console.log(response);
        });
    };
  });