/*********************************************************************
*
*  factories/auth
*  Factory that makes the OAuth requests
*
*********************************************************************/

angular
  .module('ngGithub.factories', [])
  .factory('authFactory', function ($http, $oauth) {
    return {
      login: function () {
        $http.get($oauth.url, {
          params: {
            client_id: $oauth.clientId,
            scope: $oauth.scope,
            state: 'lol'
          }
        })
      }
    }
  });