;(function($,undefined) {
    
    /**
     * 
     * @param selector Element or jQuery or Selector
     * @see https://api.jquery.com/find/
     */
    $.fn.pathfinder = function(selector) {
        return $(this).find(selector);
    };

    /**
     * @see https://api.jquery.com/after/
     * @see https://api.jquery.com/clone/
     */
    $.fn.mirage = function() {
        $(this).after($(this).clone());
    };

    /**
     * @@see https://api.jquery.com/hide/#hide
     */
    $.fn.wraith = function() {
        return $(this).hide();
    };

    /**
     * @see window.crypto#getRandomValues(typedArray)
     */
    $.crypto = function() {
        return window.crypto.getRandomValues(new Uint32Array(1))[0];
    }

    /**
     * 
     * @param {PlainObject} settings 
     * @see https://api.jquery.com/jquery.ajax/#jQuery-ajax-settings
     */
    $.apex = function(settings) {
        return $.ajax(settings);
    };
})(jQuery);