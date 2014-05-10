/*********************************************************************
*
*  util/languages
*  Programming language value provider
*
*********************************************************************/

angular
  .module('ngGithub.util', [])
  .value('$languages', [
    { name: 'JavaScript' },
    { name: 'CoffeeScript' },
    { name: 'Ruby' },
    { name: 'CSS' },
    { name: 'Go' },
    { name: 'Python' },
    { name: 'Java' }
  ]);