import { routerConfig } from './about.route';
import { AboutController } from './about.controller';
import '../components/navbar';
import '../components/malarkey';
import '../components/webDevTec';

export default angular
  .module('app.about', [
    'ui.router',
    'toastr',
    'app.components.navbar',
    'app.components.malarkey',
    'app.components.webDevTec'
  ])
  .config(routerConfig)
  .controller('AboutController', AboutController);
