(function() {
  'use strict';

  angular
    .module('testeFrontEnd')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
