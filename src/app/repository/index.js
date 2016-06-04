import { routerConfig } from './repository.route';
import { RepositoryController } from './repository.controller';
import '../components/navbar';

export default angular
  .module('app.repository', [
    'ui.router',
    'app.components.navbar'
  ])
  .config(routerConfig)
  .controller('RepositoryController', RepositoryController);
