/*  */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';

import { MainController } from './main/main.controller';
import { RepositoryController } from './repository/repository.controller';
import { GithubService } from '../app/components/github/github.service';

angular.module('edoolsSelecao', [
		'ngResource', 
		'ngAnimate', 
		'ngCookies', 
		'ngTouch', 
		'ngSanitize', 
		'ngMessages', 
		'ngAria', 
		'ui.router', 
		'ui.bootstrap', 
		'toastr'
	])
	.config(config)
	.config(routerConfig)
	.run(runBlock)
	
	.service('GithubService', GithubService)
	
	.controller('MainController', MainController)
	.controller('RepositoryController', RepositoryController);
