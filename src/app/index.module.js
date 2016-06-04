import { config } from './index.config';
import './main';
import './about';

angular
  .module('app', [
    'ngAnimate',
    'ngSanitize',
    'ngMessages',
    'ngAria',
    'ngMaterial',

    // own modules
    'app.main',
    'app.about'
  ])
  .config(config);
