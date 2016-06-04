export function RepositorySearchDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/repositorySearch/repositorySearch.html',
    scope: {
      onItemSelected: '&?',
      repositories: '=?'
    },
    controller: RepositorySearchController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;
}

class RepositorySearchController {
  constructor($http, $q) {
    'ngInject';

    this.$http = $http;
    this.searchText = '';
    this.$q = $q;
    this.repositories = this.repositories || [];
  }

  querySearch(query) {
    var deferred = this.$q.defer();
    if (!query || query.length < 3) {
      deferred.reject();
    }
    this.$http.get('https://api.github.com/search/repositories', {
      params: {
        q: query
      }
    }).then((result) => {
      this.repositories = result.data.items;
      deferred.resolve(this.repositories);
    });
    return deferred.promise;
  }

  selectedItemChange(item) {
    if (angular.isFunction(this.onItemSelected)) {
      this.onItemSelected({
        repository: item
      });
    }
  }

  createFilterFor(query) {
    var lowercaseQuery = angular.lowercase(query);
    return (item) => {
      return (item.value.indexOf(lowercaseQuery) === 0);
    }
  }

  // TODO delete
  // querySearch(query) {
  //   var deferred = this.$q.defer();
  //   if (!query || query.length < 3) {
  //     deferred.reject();
  //   }
  //   this.repositories = [{
  //     "id": 24195339,
  //     "name": "angular",
  //     "full_name": "angular/angular",
  //     "owner": {
  //       "login": "angular",
  //       "id": 139426,
  //       "avatar_url": "https://avatars.githubusercontent.com/u/139426?v=3",
  //       "gravatar_id": "",
  //       "url": "https://api.github.com/users/angular",
  //       "html_url": "https://github.com/angular",
  //       "followers_url": "https://api.github.com/users/angular/followers",
  //       "following_url": "https://api.github.com/users/angular/following{/other_user}",
  //       "gists_url": "https://api.github.com/users/angular/gists{/gist_id}",
  //       "starred_url": "https://api.github.com/users/angular/starred{/owner}{/repo}",
  //       "subscriptions_url": "https://api.github.com/users/angular/subscriptions",
  //       "organizations_url": "https://api.github.com/users/angular/orgs",
  //       "repos_url": "https://api.github.com/users/angular/repos",
  //       "events_url": "https://api.github.com/users/angular/events{/privacy}",
  //       "received_events_url": "https://api.github.com/users/angular/received_events",
  //       "type": "Organization",
  //       "site_admin": false
  //     },
  //     "private": false,
  //     "html_url": "https://github.com/angular/angular",
  //     "description": "",
  //     "fork": false,
  //     "url": "https://api.github.com/repos/angular/angular",
  //     "forks_url": "https://api.github.com/repos/angular/angular/forks",
  //     "keys_url": "https://api.github.com/repos/angular/angular/keys{/key_id}",
  //     "collaborators_url": "https://api.github.com/repos/angular/angular/collaborators{/collaborator}",
  //     "teams_url": "https://api.github.com/repos/angular/angular/teams",
  //     "hooks_url": "https://api.github.com/repos/angular/angular/hooks",
  //     "issue_events_url": "https://api.github.com/repos/angular/angular/issues/events{/number}",
  //     "events_url": "https://api.github.com/repos/angular/angular/events",
  //     "assignees_url": "https://api.github.com/repos/angular/angular/assignees{/user}",
  //     "branches_url": "https://api.github.com/repos/angular/angular/branches{/branch}",
  //     "tags_url": "https://api.github.com/repos/angular/angular/tags",
  //     "blobs_url": "https://api.github.com/repos/angular/angular/git/blobs{/sha}",
  //     "git_tags_url": "https://api.github.com/repos/angular/angular/git/tags{/sha}",
  //     "git_refs_url": "https://api.github.com/repos/angular/angular/git/refs{/sha}",
  //     "trees_url": "https://api.github.com/repos/angular/angular/git/trees{/sha}",
  //     "statuses_url": "https://api.github.com/repos/angular/angular/statuses/{sha}",
  //     "languages_url": "https://api.github.com/repos/angular/angular/languages",
  //     "stargazers_url": "https://api.github.com/repos/angular/angular/stargazers",
  //     "contributors_url": "https://api.github.com/repos/angular/angular/contributors",
  //     "subscribers_url": "https://api.github.com/repos/angular/angular/subscribers",
  //     "subscription_url": "https://api.github.com/repos/angular/angular/subscription",
  //     "commits_url": "https://api.github.com/repos/angular/angular/commits{/sha}",
  //     "git_commits_url": "https://api.github.com/repos/angular/angular/git/commits{/sha}",
  //     "comments_url": "https://api.github.com/repos/angular/angular/comments{/number}",
  //     "issue_comment_url": "https://api.github.com/repos/angular/angular/issues/comments{/number}",
  //     "contents_url": "https://api.github.com/repos/angular/angular/contents/{+path}",
  //     "compare_url": "https://api.github.com/repos/angular/angular/compare/{base}...{head}",
  //     "merges_url": "https://api.github.com/repos/angular/angular/merges",
  //     "archive_url": "https://api.github.com/repos/angular/angular/{archive_format}{/ref}",
  //     "downloads_url": "https://api.github.com/repos/angular/angular/downloads",
  //     "issues_url": "https://api.github.com/repos/angular/angular/issues{/number}",
  //     "pulls_url": "https://api.github.com/repos/angular/angular/pulls{/number}",
  //     "milestones_url": "https://api.github.com/repos/angular/angular/milestones{/number}",
  //     "notifications_url": "https://api.github.com/repos/angular/angular/notifications{?since,all,participating}",
  //     "labels_url": "https://api.github.com/repos/angular/angular/labels{/name}",
  //     "releases_url": "https://api.github.com/repos/angular/angular/releases{/id}",
  //     "deployments_url": "https://api.github.com/repos/angular/angular/deployments",
  //     "created_at": "2014-09-18T16:12:01Z",
  //     "updated_at": "2016-06-04T17:59:57Z",
  //     "pushed_at": "2016-06-04T17:25:14Z",
  //     "git_url": "git://github.com/angular/angular.git",
  //     "ssh_url": "git@github.com:angular/angular.git",
  //     "clone_url": "https://github.com/angular/angular.git",
  //     "svn_url": "https://github.com/angular/angular",
  //     "homepage": "https://angular.io",
  //     "size": 615257,
  //     "stargazers_count": 12539,
  //     "watchers_count": 12539,
  //     "language": "TypeScript",
  //     "has_issues": true,
  //     "has_downloads": true,
  //     "has_wiki": true,
  //     "has_pages": false,
  //     "forks_count": 3257,
  //     "mirror_url": null,
  //     "open_issues_count": 1393,
  //     "forks": 3257,
  //     "open_issues": 1393,
  //     "watchers": 12539,
  //     "default_branch": "master",
  //     "score": 16.94513
  //   }, {
  //     "id": 24273098,
  //     "name": "angula",
  //     "full_name": "mvquispea/angula",
  //     "owner": {
  //       "login": "mvquispea",
  //       "id": 6364875,
  //       "avatar_url": "https://avatars.githubusercontent.com/u/6364875?v=3",
  //       "gravatar_id": "",
  //       "url": "https://api.github.com/users/mvquispea",
  //       "html_url": "https://github.com/mvquispea",
  //       "followers_url": "https://api.github.com/users/mvquispea/followers",
  //       "following_url": "https://api.github.com/users/mvquispea/following{/other_user}",
  //       "gists_url": "https://api.github.com/users/mvquispea/gists{/gist_id}",
  //       "starred_url": "https://api.github.com/users/mvquispea/starred{/owner}{/repo}",
  //       "subscriptions_url": "https://api.github.com/users/mvquispea/subscriptions",
  //       "organizations_url": "https://api.github.com/users/mvquispea/orgs",
  //       "repos_url": "https://api.github.com/users/mvquispea/repos",
  //       "events_url": "https://api.github.com/users/mvquispea/events{/privacy}",
  //       "received_events_url": "https://api.github.com/users/mvquispea/received_events",
  //       "type": "User",
  //       "site_admin": false
  //     },
  //     "private": false,
  //     "html_url": "https://github.com/mvquispea/angula",
  //     "description": null,
  //     "fork": false,
  //     "url": "https://api.github.com/repos/mvquispea/angula",
  //     "forks_url": "https://api.github.com/repos/mvquispea/angula/forks",
  //     "keys_url": "https://api.github.com/repos/mvquispea/angula/keys{/key_id}",
  //     "collaborators_url": "https://api.github.com/repos/mvquispea/angula/collaborators{/collaborator}",
  //     "teams_url": "https://api.github.com/repos/mvquispea/angula/teams",
  //     "hooks_url": "https://api.github.com/repos/mvquispea/angula/hooks",
  //     "issue_events_url": "https://api.github.com/repos/mvquispea/angula/issues/events{/number}",
  //     "events_url": "https://api.github.com/repos/mvquispea/angula/events",
  //     "assignees_url": "https://api.github.com/repos/mvquispea/angula/assignees{/user}",
  //     "branches_url": "https://api.github.com/repos/mvquispea/angula/branches{/branch}",
  //     "tags_url": "https://api.github.com/repos/mvquispea/angula/tags",
  //     "blobs_url": "https://api.github.com/repos/mvquispea/angula/git/blobs{/sha}",
  //     "git_tags_url": "https://api.github.com/repos/mvquispea/angula/git/tags{/sha}",
  //     "git_refs_url": "https://api.github.com/repos/mvquispea/angula/git/refs{/sha}",
  //     "trees_url": "https://api.github.com/repos/mvquispea/angula/git/trees{/sha}",
  //     "statuses_url": "https://api.github.com/repos/mvquispea/angula/statuses/{sha}",
  //     "languages_url": "https://api.github.com/repos/mvquispea/angula/languages",
  //     "stargazers_url": "https://api.github.com/repos/mvquispea/angula/stargazers",
  //     "contributors_url": "https://api.github.com/repos/mvquispea/angula/contributors",
  //     "subscribers_url": "https://api.github.com/repos/mvquispea/angula/subscribers",
  //     "subscription_url": "https://api.github.com/repos/mvquispea/angula/subscription",
  //     "commits_url": "https://api.github.com/repos/mvquispea/angula/commits{/sha}",
  //     "git_commits_url": "https://api.github.com/repos/mvquispea/angula/git/commits{/sha}",
  //     "comments_url": "https://api.github.com/repos/mvquispea/angula/comments{/number}",
  //     "issue_comment_url": "https://api.github.com/repos/mvquispea/angula/issues/comments{/number}",
  //     "contents_url": "https://api.github.com/repos/mvquispea/angula/contents/{+path}",
  //     "compare_url": "https://api.github.com/repos/mvquispea/angula/compare/{base}...{head}",
  //     "merges_url": "https://api.github.com/repos/mvquispea/angula/merges",
  //     "archive_url": "https://api.github.com/repos/mvquispea/angula/{archive_format}{/ref}",
  //     "downloads_url": "https://api.github.com/repos/mvquispea/angula/downloads",
  //     "issues_url": "https://api.github.com/repos/mvquispea/angula/issues{/number}",
  //     "pulls_url": "https://api.github.com/repos/mvquispea/angula/pulls{/number}",
  //     "milestones_url": "https://api.github.com/repos/mvquispea/angula/milestones{/number}",
  //     "notifications_url": "https://api.github.com/repos/mvquispea/angula/notifications{?since,all,participating}",
  //     "labels_url": "https://api.github.com/repos/mvquispea/angula/labels{/name}",
  //     "releases_url": "https://api.github.com/repos/mvquispea/angula/releases{/id}",
  //     "deployments_url": "https://api.github.com/repos/mvquispea/angula/deployments",
  //     "created_at": "2014-09-20T20:04:20Z",
  //     "updated_at": "2014-09-20T20:04:20Z",
  //     "pushed_at": "2014-09-20T20:04:20Z",
  //     "git_url": "git://github.com/mvquispea/angula.git",
  //     "ssh_url": "git@github.com:mvquispea/angula.git",
  //     "clone_url": "https://github.com/mvquispea/angula.git",
  //     "svn_url": "https://github.com/mvquispea/angula",
  //     "homepage": null,
  //     "size": 0,
  //     "stargazers_count": 0,
  //     "watchers_count": 0,
  //     "language": null,
  //     "has_issues": true,
  //     "has_downloads": true,
  //     "has_wiki": true,
  //     "has_pages": false,
  //     "forks_count": 0,
  //     "mirror_url": null,
  //     "open_issues_count": 0,
  //     "forks": 0,
  //     "open_issues": 0,
  //     "watchers": 0,
  //     "default_branch": "master",
  //     "score": 16.638788
  //   }];
  //
  //   deferred.resolve(this.repositories);
  //
  //   return deferred.promise;
  //
  // }

}
