(function($) {
    $('input[name="payment-method"]').on('change', function(e) {
        togglePaymentFields(e);
        toggleInstructions(e);
    });
    function togglePaymentFields(e) {
        var tar = $(e.target),
            fieldsetId = tar.attr('data-fields'),
            fieldsets = $('.payment-method--fields');
        fieldsets.addClass('d-none').siblings(fieldsetId).removeClass('d-none');
    }
    function toggleInstructions(e) {
        var tar = $(e.target),
            descId = tar.attr('data-instructions'),
            descriptions = $('.form--order-summary__desc');
        descriptions.addClass('d-none').siblings(descId).removeClass('d-none');
    }
})(jQuery);