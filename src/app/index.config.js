export function config($logProvider, toastrConfig, $httpProvider) {
  'ngInject';
  // Enable log
  $logProvider.debugEnabled(true);

  // Set options third-party lib
  toastrConfig.allowHtml = true;
  toastrConfig.timeOut = 3000;
  toastrConfig.positionClass = 'toast-top-right';
  toastrConfig.preventDuplicates = true;
  toastrConfig.progressBar = true;

  $httpProvider.interceptors.push(httpInterceptor);

  function httpInterceptor($q, $rootScope) {
    'ngInject';

    var numLoadings = 0;

    return {
      request: function (config) {

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
