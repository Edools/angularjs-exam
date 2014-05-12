/*********************************************************************
*
*  util/queryString
*  Query string encoding service
*
*********************************************************************/
angular.module('ngGithub.util.queryString', [])
  .service('$qs', function () {
    'use strict';
    /**
    * encode
    * Encodes a query string from an object
    * @param: obj (Object)
    **/
    this.encode = function (obj) {
      var qs = '?',
        keys = Object.keys(obj),
        klen = keys.length;
      
      keys.forEach(function (key, index) {
        qs += key;
        qs += '=';
        qs += obj[key];
        /* if it's the last key, doesn't add the "&" */
        qs += index < klen - 1 ? '&' : '';
      });
      return qs;
    };

    /**
    * decode
    * Decodes a query string to an object
    * @param: s (String)
    **/
    this.decode = function (s) {
      var obj = {},
        keys;
      /* remove the useless ? */
      s = s.replace('?', '');
      keys = s.split('&');

      /* ASSEMBLE! the object */
      keys.forEach(function (key) {
        var arr = key.split('=');
        obj[arr[0]] = arr[1] || '';
      });
      return obj;
    };
  });