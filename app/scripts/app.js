'use strict';

/**
 * @ngdoc overview
 * @name edoolsApp
 * @description
 * # edoolsApp
 *
 * Main module of the application.
 */
angular
  .module('edoolsApp', ['ngAnimate', 'ngResource', 'ngRoute', 'oc.lazyLoad'])

  var authentication = {
      headers: {
          'access_token': 'ab22c41a26519a56a03a39d99fa1f31bd7b5637d'
      }
  };
