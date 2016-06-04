/* global moment:false */

import { routerConfig } from './issue.route';
import { IssueController } from './issue.controller';
import '../components/navbar';

export default angular
  .module('app.issue', [
    'ui.router',
    'app.components.navbar'
  ])
  .constant('moment', moment)
  .config(routerConfig)
  .controller('IssueController', IssueController);
