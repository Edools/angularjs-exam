'use strict';




describe('RepositoriesController', function() {
  var $q,
        $rootScope,
        $scope,
        queryDeferred,
        MockRepositoriesModel,
        MockRepositoriesModelResponse;

  beforeEach(module('myApp.repositories'));

  beforeEach(inject(function(_$q_, _$rootScope_) {
    $q = _$q_;
    $rootScope = _$rootScope_;
  }));

  beforeEach(inject(function($controller) {
    $scope = $rootScope.$new();

    MockRepositoriesModel = {
      query: function() {
        queryDeferred = $q.defer();
        return {$promise: queryDeferred.promise};
      }
    }

    MockRepositoriesModelResponse = ["teste"];

    spyOn(MockRepositoriesModel, 'query').andCallThrough();

    $controller('RepositoriesController', {
      '$scope': $scope,
      'RepositoriesModel': MockRepositoriesModel
    });
  }));

  describe('RepositoriesModel.query', function() {

    beforeEach(function() {
      queryDeferred.resolve(MockRepositoriesModelResponse);
      $rootScope.$apply();
    });

    it('should query the RepositoriesModel', function() {
      expect(MockRepositoriesModel.query).toHaveBeenCalled();
    });

    it('should set the response from the RepositoriesModel to $scope.repositories', function() {
      expect($scope.repositories).toEqual(MockRepositoriesModelResponse);
    });
   
  });
    
});
