/// <reference path="../typings/globals/jquery/index.d.ts" />

require('./simple-lightbox');

(function ($, window, document, undefined) {
    'use strict';
    $.fn.simpleLightbox = function (options) {
        return this.length ? new SimpleLightbox(this.get(), options) : null;
    }
})(jQuery, window, document);


$(function() {
    const $gallery = $('.gallery a').simpleLightbox();
});