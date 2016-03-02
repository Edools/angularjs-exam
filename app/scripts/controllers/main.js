'use strict';

/**
 * @ngdoc function
 * @name edoolsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the edoolsApp
 */
angular.module('edoolsApp')
  .controller('MainCtrl', MainCtrl);

  function MainCtrl($http, $route, $location, user, repos) {

      this.errors = _errors($route.current.params.err);
      this.user = user;
      this.repos = repos;
      this.search = _search;

      ////////////////

      var vm = this;

      function _search() {
          if (vm.user_search) {
              $location.path( "/user/" + vm.user_search )
          }
      }

      function _errors(err) {
          if(err === '?err-user') {
              return "An error occurred while fetching user. Try again.";
          } else if(err === '?err-repo') {
              return "Error listing repositories. Try again.";
          }
      }

  }
