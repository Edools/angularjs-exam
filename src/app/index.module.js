import { config } from './index.config';
import './main';
import './about';
import './repository';

angular
  .module('app', [
    'ngAnimate',
    'ngSanitize',
    'ngMessages',
    'ngAria',
    'ngMaterial',

    // own modules
    'app.main',
    'app.about',
    'app.repository'
  ])
  .config(config);
