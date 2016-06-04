import { GithubContributorService } from './githubContributor.service';

export default angular
  .module('app.components.githubContributor', [])
  .service('githubContributor', GithubContributorService);
