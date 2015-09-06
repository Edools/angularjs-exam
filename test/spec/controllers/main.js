'use strict';

describe('Controller: MainCtrl', function () {
  var $httpBackend;

  beforeEach(module('queroTrabalharNoEdoolsFrontendApp'));

  beforeEach(inject(function($injector) {
    $httpBackend = $injector.get('$httpBackend');
  }))

  var MainCtrl;
  var scope;

  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', { $scope: scope });
  }));

  describe("$scope.takeUser(user): ", function () {
    beforeEach(function() {
      $httpBackend.whenGET("https://api.github.com/users/jcomello").respond({
        "login": "jcomello",
        "avatar_url": "https://avatars.githubusercontent.com/u/2027411?v=3",
        "name": "João Carreira de Oliveira e Mello",
        "public_repos": 16,
        "followers": 6,
        "following": 15
      });
    });

    it('gets the user data', function () {
      scope.takeUser("jcomello");

      $httpBackend.flush();
      $httpBackend.expect('GET', "https://api.github.com/users/jcomello");

      expect(scope.userInfo.login).toBe("jcomello");
      expect(scope.userInfo.name).toBe("João Carreira de Oliveira e Mello");
    });
  });
});
