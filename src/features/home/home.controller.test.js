import home from './index';

describe('Controller: Home', function() {
  let $controller, $timeout;

  beforeEach(angular.mock.module(home));

  beforeEach(angular.mock.inject(function(_$controller_, _$timeout_) {
    $controller = _$controller_;
    $timeout = _$timeout_;
  }));

  it('Repositories loaded!', function() {
    let ctrl = $controller('HomeController');
    $timeout(function() {
        expect(ctrl.elasticGit.successApiCall).toBe("Ok");
    }, 1000);
    //expect(ctrl.elasticGit.getRepos).not.toBe(null);
  });

});