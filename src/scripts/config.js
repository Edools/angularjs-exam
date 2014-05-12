/*********************************************************************
*
*  config.js
*  App configuration providers
*
*********************************************************************/

angular
  .module('ngGithub.config', [])
  /* API configuration */
  .constant('$apiConfig', {
    version: 'v3',
    url: 'https://api.github.com'
  })
  .constant('$searchConfig', {
    minLength: 4
  });