export function config($logProvider, toastrConfig, $httpProvider, localStorageServiceProvider) {
  'ngInject';
  // Enable log
  $logProvider.debugEnabled(true);

  localStorageServiceProvider
    .setPrefix('gitDools');

  // Set options third-party lib
  toastrConfig.allowHtml = true;
  toastrConfig.timeOut = 3000;
  toastrConfig.positionClass = 'toast-top-right';
  toastrConfig.preventDuplicates = true;
  toastrConfig.progressBar = true;

  $httpProvider.interceptors.push(httpInterceptor);

  function httpInterceptor($q, $rootScope, localStorageService) {
    'ngInject';

    let accessToken = localStorageService.get('access_token');

    var numLoadings = 0;

    return {
      request: function (config) {

        // Add access_token to github requests
        if(accessToken && config.url.indexOf('github') > -1) {
          if(!config.params)
            config.params = {};
          config.params.access_token = accessToken;
        }

        numLoadings++;
        $rootScope.isBusy = true;
        return config || $q.when(config);

      },
      response: function (response) {

        if ((--numLoadings) === 0)
          $rootScope.isBusy = false;

        return response || $q.when(response);

      },
      responseError: function (response) {

        if (!(--numLoadings))
          $rootScope.isBusy = false;

        return $q.reject(response);
      }
    };
  }
}
