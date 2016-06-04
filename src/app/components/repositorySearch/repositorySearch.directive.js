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
  
}
