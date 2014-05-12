/*********************************************************************
*
*  factories/repo.js
*  Github repos factory for retrieving data
*
*********************************************************************/
angular.module('ngGithub.factories.repo', [
    'ngGithub.config'
  ])
  .factory('repoFactory', function ($http, $apiConfig) {
    'use strict';

    /**
    * makeQueryString
    * Makes a querystring that is readable by github API
    * @param: q (String)
    * @param: language (String)
    **/
    function makeGHQueryString (q) {
      if(q === '') {
        /* q can't be empty, so add a create parameter
         to don't exclude any repo from query */
        q = 'created:>2000-01-01';
      } else {
        /* transforming in query parameter (e.g. "angular js" -> "angular+js") */
        q = q.indexOf(' ') !== -1 ? q.replace(/[.\ ]/g, '+') : q;
      }
      return q;
    }

    return {
      /*
      *  query
      *  Queries the public repositories
      *  @param: q (String)
      */
      query: function (q) {
        var url = $apiConfig.url + '/search/repositories';
        q = q === undefined ? '' : q;
        q = makeGHQueryString(q);

        return $http.get(url, {
          params: {
            q: q,
            sort: 'stars',
            order: 'desc'
          }
        });
      },

      /**
      * getReadme
      * Gets the repository README.md content on HTML format
      * @param: repo (Object)
      **/
      getReadme: function (repo) {
        var resource = '/repos/:owner/:repo/readme'
                          .replace(':owner', repo.owner.login)
                          .replace(':repo', repo.name),
          url = $apiConfig.url + resource;

        return $http.get(url, {
          headers: {
            'Accept': 'application/vnd.github.VERSION.html+json'
          }
        });
      }
    };
  });
