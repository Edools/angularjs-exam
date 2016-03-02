import './home.css';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './home.routes';
import HomeController from './home.controller';
import elasticGit from '../../services/home.service';

export default angular.module('app.home', [uirouter, elasticGit])
  .config(routing)
  .controller('HomeController', HomeController)
  .name;
