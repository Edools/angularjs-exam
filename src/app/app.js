import 'font-awesome/css/font-awesome.css';
import './assets/styl/style.styl';

import Register from './register';
import LoadingUtils from './service';
import GithubController from './controller';
import RepositoryController from '../components/repository/controller/controller';
import IssueController from '../components/issue/controller/controller';

import RepositoryService from '../components/repository/service/service';
import IssueService from '../components/issue/service/service';

import Repository from '../components/repository/directive/directive';
import Issue from '../components/issue/directive/directive';
import NgEnter from '../components/common/directive/directive';

class GithubApp {
    constructor() {
        new Register('GithubApp')
            .directive('repository', Repository)
            .directive('issue',  Issue)
            .directive('ngEnter',  NgEnter)

            .service('$loadingUtils', LoadingUtils)
            .service('$repositoryService', RepositoryService)
            .service('$issueService', IssueService)

            .controller('GithubController', GithubController)
            .controller('GithubRepositoryController', RepositoryController)
            .controller('GithubIssueController', IssueController)

            .config(($httpProvider) => {
                $httpProvider.interceptors.push('$loadingUtils');
            });
    }
}
new GithubApp();
