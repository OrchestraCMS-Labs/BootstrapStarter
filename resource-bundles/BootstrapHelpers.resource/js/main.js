window.STG = window.STG || {};
window.STG.CTLib = window.STG.CTLib || {};

window.STG.CTLib.BootstrapHelper = (function(global, namespace, undefined) {
    /* By default, attempt to find and convert any Class Styled Menu content within a .navbar */
    $(function() {
        $('.navbar').each(function() {
            namespace.convertClassStyledMenuToNavbar($(this));
        });
    });

    /**
     * Adds bootstrap navbar classes to an OrchestraCMS Class Styled Menu within a container.
     *
     * @param $container a jQuery collection containing the parent element
     */
    namespace.convertClassStyledMenuToNavbar = function($container) {
        $('.root-level-list', $container).addClass('nav navbar-nav');
        $('.root-level-item', $container).each(function() {
            if($('.level-1-list', this).length) {
                $(this).addClass('dropdown');
                $(this).children('a')
                    .addClass('dropdown-toggle')
                    .attr('data-toggle', 'dropdown')
                    .data('toggle', 'dropdown')
                    .append('<b class="caret"></b>');
                $('.level-1-list', this).addClass('dropdown-menu');
            }
        });

        $container.removeClass('hidden');
    };

    /**
     * Fixes OCMS buttons in edit mode. Both jQueryUI (used by OrchestraCMS) and Bootstrap
     * have a jQuery widget called 'button'. For the OrchestraCMS UI to function we need to
     * set the Bootstrap buttons into noConflict mode.
     *
     * This should be executed immediately after bootstrap.js is included.
     */
    window.$.fn.bsButton = window.$.fn.button.noConflict();
}(window, STG.CTLib.BootstrapHelper || {}));
