/* global moment:false */

import { IssueListDirective } from './issueList.directive';

export default angular
  .module('app.components.issueList', [])
  .constant('moment', moment)
  .directive('issueList', IssueListDirective);
