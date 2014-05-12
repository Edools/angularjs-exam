describe('Service: queryString', function () {
  /* load the required modules */
  beforeEach(module('ngGithub.util.queryString'));

  var service;
  /* inject the service */
  beforeEach(inject(function ($qs) {
    service = $qs;
  }));

  it('should encode an object to query string', function () {
    var obj = { a: 1, b: 2 }, 
      qs = service.encode(obj);
    expect(typeof qs).toBe('string');
    expect(qs).toEqual('?a=1&b=2');
  });

  it('should decode a query string to an object', function () {
    var qs = '?a=1&b=2',
      obj = service.decode(qs);
    expect(obj).toBeDefined();
    expect(obj.a).toBeDefined();
    expect(obj.b).toBeDefined();
    expect(obj.a).toEqual('1');
    expect(obj.b).toEqual('2');
  });
});