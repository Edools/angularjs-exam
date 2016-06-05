import { routerConfig } from './main.route';
import { MainController } from './main.controller';
import '../components/navbar';
import '../components/malarkey';
import '../components/repositorySearch';
import '../components/repositoryList';

export default angular
  .module('app.main', [
    'ui.router',
    'app.components.navbar',
    'app.components.malarkey',
    'app.components.repositorySearch',
    'app.components.repositoryList'
  ])
  .config(routerConfig)
  .controller('MainController', MainController);
