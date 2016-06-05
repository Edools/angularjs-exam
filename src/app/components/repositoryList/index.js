/* global moment:false */

import { RepositoryListDirective } from './repositoryList.directive';

export default angular
  .module('app.components.repositoryList', [])
  .constant('moment', moment)
  .directive('repositoryList', RepositoryListDirective);
