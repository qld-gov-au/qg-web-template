'use strict';

(function (swe) {
    if($('#qgcidm-avatar').length > 0) {
        window.cidmLoaderBaseUrl;
        function loadCidm(res) {
            var config = res.config,
                css = '<link rel="stylesheet" type="text/css" href="' + res.cssURL + '">';
            cidmLoaderBaseUrl = res.cidmLoaderBaseUrl;
            if(config !== 'undefined' && cidmLoaderBaseUrl !== 'undefined') {
                config.returnTo = (config.returnTo !== 'undefined' ? location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + config.returnTo : '/');
                requirejs([cidmLoaderBaseUrl + '/cidm-loader.js'], function () {
                    requirejs(['cidm-neo', 'cidm-utils', 'es6-promise'], function () {
                        $('head').append(css);
                        $(document).ready(function() {
                            $.qgcidm.initialise(config);
                            $('#qgcidm-avatar').avatar();
                            $.qgcidm.enable();
                        });
                    })
                });
            }
        }
        function getConfig() {
            console.log('Loaded require');
            swe.ajaxCall('/assets/apps/cidm/qg-cidm-config.json', 'json', loadCidm, 'failed to load cidm config. Expecting config file at "/assets/apps/widget/qg-cidm-config.json"');
        };
        swe.ajaxCall(window.qg.cdn + window.qg.swe.assets + 'lib/ext/require.min.js', 'script', getConfig, 'Require JS unavailable');
    }
}(qg.swe));
