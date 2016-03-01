/* global moment:false */

import constants  from './index.constants';
import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';

import { GithubService } from './components/github/github.service';
import { MainController } from './main/main.controller';

import { NavbarDirective } from './components/navbar/navbar.directive';
import { LoaderDirective } from './components/loader/loader.directive';
import { LazyImageDirective } from './components/util/lazyImage.directive.js';

angular.module('gitDools',
  [
    'ngAnimate',
    'ngCookies',
    'ngTouch',
    'ngSanitize',
    'ngMessages',
    'ngAria',
    'ngResource',
    'ui.router',
    'ui.bootstrap',
    'toastr'
  ])
  .constant('moment', moment)
  .constant('config', constants)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('GithubService', GithubService)
  .controller('MainController', MainController)
  .directive('navbar', NavbarDirective)
  .directive('loader', LoaderDirective)
  .directive('lazyImg', LazyImageDirective);
