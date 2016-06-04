/**
 * @todo Complete the test
 * This example is not perfect.
 * The `link` function is not tested.
 * (malarkey usage, addClass, $watch, $destroy)
 */
describe('directive malarkey', function() {
  let element;

  beforeEach(angular.mock.module('app'));

  beforeEach(inject(($compile, $rootScope, $q) => {
    element = angular.element(`
      <acme-malarkey extra-values="['Poney', 'Monkey']"></acme-malarkey>
    `);

    $compile(element)($rootScope.$new());
    $rootScope.$digest();

  }));

  it('should be compiled', () => {
    expect(element.html()).not.toEqual(null);
  });

});
