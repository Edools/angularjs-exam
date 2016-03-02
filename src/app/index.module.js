/* global moment:false, FastClick:false */

import constants  from './index.constants';
import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';

import { GithubService } from './components/github/github.service';
import { MainController } from './main/main.controller';
import { RepoController } from './repo/repo.controller';

import { NavbarDirective } from './components/navbar/navbar.directive';
import { LoaderDirective } from './components/loader/loader.directive';
import { LazyImageDirective } from './components/util/lazyImage.directive.js';
import { EventFocusDirective } from './components/util/eventFocus.directive';

angular.module('gitDools',
  [
    'ngAnimate',
    'ngCookies',
    'ngTouch',
    'ngSanitize',
    'ngMessages',
    'ngAria',
    'ngResource',
    'ui.bootstrap',
    'ui.router',
    'toastr',
    'angular-clipboard',
    'ab-base64',
    'btford.markdown'
  ])
  .constant('moment', moment)
  .constant('FastClick', FastClick)
  .constant('config', constants)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('GithubService', GithubService)
  .controller('MainController', MainController)
  .controller('RepoController', RepoController)
  .directive('navbar', NavbarDirective)
  .directive('loader', LoaderDirective)
  .directive('lazyImg', LazyImageDirective)
  .directive('eventFocus', EventFocusDirective);
