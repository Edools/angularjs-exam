(function() {
  'use strict';

  angular
    .module('roposDoolsGit')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
