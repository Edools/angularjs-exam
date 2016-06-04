import { routerConfig } from './main.route';
import { MainController } from './main.controller';
import '../components/navbar';
import '../components/malarkey';

export default angular
  .module('app.main', [
    'ui.router',
    'toastr',
    'app.components.navbar',
    'app.components.malarkey'
  ])
  .config(routerConfig)
  .controller('MainController', MainController);
