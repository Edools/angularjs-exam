/*********************************************************************
*
*  factories/repo.js
*  Github repos factory for retrieving data
*
*********************************************************************/
angular.module('ngGithub.factories', [])
  .factory('repoFactory', function ($http, $apiConfig) {
    'use strict';

    return {
      /*
      * list
      * lists the public repositories ordered by star
      */
      list: function (language) {
        var url = $apiConfig.url + '/search/repositories',
          q = 'language:'+language;
        return $http.get(url, {
          params: {
            q: q,
            sort: 'stars',
            order: 'desc'
          }
        }); 
      },

      /*
      *  query
      *  queries the public repositories
      *  @param: q (String)
      */
      query: function (q) {
        var url = $apiConfig.url + '/search/repositories';
        /* transforming in query parameter */
        q = q.indexOf(' ') != -1 ? q.replace(/[.\ ]/g, '+') : q;
        return $http.get(url, {
          params: {
            q: q
          }
        });
      }
    }
  });
