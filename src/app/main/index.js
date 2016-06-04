import { routerConfig } from './main.route';
import { MainController } from './main.controller';
import '../components/navbar';
import '../components/malarkey';
import '../components/repositorySearch';

export default angular
  .module('app.main', [
    'ui.router',
    'toastr',
    'app.components.navbar',
    'app.components.malarkey',
    'app.components.repositorySearch'
  ])
  .config(routerConfig)
  .controller('MainController', MainController);
