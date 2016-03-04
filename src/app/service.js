class LoadingUtils {
    constructor ($q, $rootScope, $log) {
        'use strict';

        this.xhrCreations = 0;
        this.xhrResolutions = 0;

        this.updateStatus = () => {
            $rootScope.loading = (this.xhrResolutions < this.xhrCreations);
        }

        var self = this;
        return {
            request: (config) => {
                self.xhrCreations++;
                self.updateStatus();
                return config;
            },
            requestError: (rejection) => {
                self.xhrResolutions++;
                self.updateStatus();
                $log.error('Request error:', rejection);
                return $q.reject(rejection);
            },
            response: (response) => {
                self.xhrResolutions++;
                self.updateStatus();
                return response;
            },
            responseError: (rejection) => {
                self.xhrResolutions++;
                self.updateStatus();
                $log.error('Response error:', rejection);
                return $q.reject(rejection);
            }
        };
    };
}

export default LoadingUtils;
