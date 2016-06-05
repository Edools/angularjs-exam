/* global malarkey:false */

import { MalarkeyDirective } from './malarkey.directive';

export default angular
  .module('app.components.malarkey', [])
  .constant('malarkey', malarkey)
  .directive('acmeMalarkey', MalarkeyDirective);
