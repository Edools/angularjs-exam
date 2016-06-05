import { routerConfig } from './repository.route';
import { RepositoryController } from './repository.controller';
import '../components/navbar';
import '../components/issueList';

export default angular
  .module('app.repository', [
    'ui.router',
    'app.components.navbar',
    'app.components.issueList'
  ])
  .config(routerConfig)
  .controller('RepositoryController', RepositoryController);
