/*********************************************************************
*
*  controller/repo
*  Controller to handle the selected repo details
*
*********************************************************************/
angular.module('ngGithub.controllers.repo', [])
  .controller('repoController', function ($scope, $rootScope, $stateParams, repoFactory) {
    'use strict';

    /* Get the repo that has been filtered */
    if($stateParams.repo !== undefined && $stateParams.repo !== '') {
      var repo = $rootScope.repos.filter(function(repo){
                  return repo.name === $stateParams.repo;
                })[0];

      /* Get the readme if the repo exists on the list */
      if(repo) {
        repoFactory.getReadme(repo)
          .success(function (result) {
            repo.readme = result;
          });
      }
    }
  });