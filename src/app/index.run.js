export function runBlock(
  $rootScope,
  $log,
  $window,
  $document,
  $state,
  $http,
  config,
  localStorageService,
  FastClick
) {
  'ngInject';
  $log.debug('runBlock end');

  $window.onload = () => {
    FastClick.attach($document[0].body);
  };

  $rootScope.$on('login', () => {
    let url = config.GITHUB_AUTH_URL +
     '?client_id=' + config.GITHUB_CLIENT_ID +
     '&scope=public_repo';

    let window = $window.open(url, 'Autorização', 'status=1, height=640, width=640, resizable=0');
  });

  // {
  //   client_id: self.clientId,
  //   client_secret: self.clientSecret,
  //   code: code,
  //   redirect_uri: self.$window.location.host,
  //   state: 'public_repo'
  // }

  let code = getQueryStringValue($window, 'code');

  if(code) {
    let url = config.GITHUB_TOKEN_URL;

    $http({
      url: url,
      params: {
        client_id: config.GITHUB_CLIENT_ID,
        client_secret: config.GITHUB_CLIENT_SECRET,
        code: code
      },
      method: 'POST'
    })
    .then((res) => {
      console.log(res);
      $window.close();
    });
  }
}

function getQueryStringValue ($window, key) {
  return unescape($window.location.search.replace(new RegExp("^(?:.*[&\\?]" + escape(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
}
