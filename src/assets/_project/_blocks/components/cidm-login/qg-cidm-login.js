/* globals requirejs, qg, $jc */
'use strict';

(function (swe) {
  if ($('#qgcidm-avatar').length > 0) {
    window.cidmLoaderBaseUrl = '';
    let loadCidm, getConfig;
    loadCidm = function (res) {
      console.log(res);
      let config = res.config;
      let css = '<link rel="stylesheet" type="text/css" href="' + res.cssURL + '">';
      window.cidmLoaderBaseUrl = res.cidmLoaderBaseUrl;
      if (config !== 'undefined' && window.cidmLoaderBaseUrl !== 'undefined') {
        config.returnTo = (config.returnTo !== 'undefined' ? location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + config.returnTo : '/');
        requirejs([window.cidmLoaderBaseUrl + '/cidm-neo-loader.js?' + Date.now()], function () {
          requirejs(['cidm-neo', 'cidm-utils', 'es6-promise'], function () {
            $('head').append(css);
            $(document).ready(function () {
              $jc.qgcidm.initialise(config);
              $jc('#qgcidm-avatar').avatar();
              $jc.qgcidm.enable();
            });
          });
        });
      }
    };
    getConfig = function () {
      console.log('Loaded require');
      swe.ajaxCall('/assets/apps/cidm/qg-cidm-config.json', 'json', loadCidm, 'failed to load cidm config. Expecting config file at "/assets/apps/widget/qg-cidm-config.json"');
    };
    swe.ajaxCall(window.qg.cdn + window.qg.swe.assets + 'lib/ext/require.min.js', 'script', getConfig, 'Require JS unavailable');
  }
}(qg.swe));
