export function RepositorySearchDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/repositorySearch/repositorySearch.html',
    scope: {
      onItemSelected: '&?'
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
    }).then(function(result) {
      deferred.resolve(result.data.items);
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
