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

  function MainCtrl($http, user, repos) {

      this.user = user;
      this.repos = repos;
      this.search = _search;

      ////////////////

      var vm = this;

      function _search() {
          if (vm.user_search) {
              return $http.get('https://api.github.com/users/' + vm.user_search)
                  .then( _searchThen )
                  .catch( function(err) { return err } );
          }
      }

      function _searchThen(data) {
          vm.user = data.data;
          return $http.get('https://api.github.com/users/' + data.data.login + '/repos')
              .then( function(data) { vm.repos = data.data } )
              .catch( function(err) { console.error('erro', err) } );
      }

  }
