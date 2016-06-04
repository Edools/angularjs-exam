/* global moment:false */

import constants from './index.constants';
import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';

import { GithubService } from './components/github/github.service';
import { MainController } from './main/main.controller';
import { RepoController } from './repo/repo.controller';
import { NavbarDirective } from './components/navbar/navbar.directive';

angular.module('githubEdools', 
[
  'ngAnimate', 
  'ngCookies', 
  'ngSanitize', 
  'ngMessages', 
  'ngAria', 
  'ngResource', 
  'ui.router', 
  'ui.bootstrap', 
  'toastr',
	'angular-clipboard',
  'ab-base64',
  'btford.markdown',
  'LocalStorageModule'
  ])
  .constant('moment', moment)
	.constant('config', constants)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
	.service('GithubService', GithubService)
  .controller('MainController', MainController)
	.controller('RepoController', RepoController)
 	.directive('navbar', NavbarDirective)