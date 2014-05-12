describe('Factory: repoFactory', function () {
  /* load the required modules */
  beforeEach(module('ngGithub', 'ngGithub.factories.repo', 'ngGithub.config'));

  var factory;

  /* inject the factory */
  beforeEach(inject(function (repoFactory) {
    factory = repoFactory;
  }));

  it('should run the query with no parameter', function (done) {
    factory.query()
      .success(function (result) {
        expect(result).toBeDefined();
        expect(result.items).toBeDefined();
        expect(result.items.length).toBeGreaterThan(0);
        done();
      });
  });

  it('should run query with a parameter', function (done) {
    factory.query('angular js')
      .success(function (result) {
        expect(result).toBeDefined();
        expect(result.items).toBeDefined();
        expect(result.items.length).toBeGreaterThan(0);
        done();
      });
  });

  it('should fetch the readme of a repo', function (done) {
    var repo = {
      name: 'bootstrap',
      owner: {
        login: 'twbs'
      }
    };
    factory.getReadme(repo)
      .success(function (result) {
        expect(typeof result).toBe('string');
        done();
      });
  });
});