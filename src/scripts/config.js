/*********************************************************************
*
*  config.js
*  App configuration providers
*
*********************************************************************/

angular
  .module('ngGithub.config', [])
  .constant('$apiConfig', {
    version: 'v3',
    url: 'https://api.github.com'
  })
  .constant('$oauth', {
    clientId: '1ec9d711abb0df6a2011',
    url: 'https://github.com/login/oauth/authorize',
    scope: 'user,public_repo'
  });