$(document).ready(function () {
    /********************** RSVP **********************/
    $('#rsvp-form').on('submit', function (e) {
        e.preventDefault();
        var data = $(this).serialize();

        $('#alert-wrapper').html(alert_markup('info', '<strong>Espera uns segons!</strong> Estem guardant les teves dades'));

        /*if (MD5($('#invite_code').val()) !== 'b0e53b10c1f55ede516b240036b88f40'
            && MD5($('#invite_code').val()) !== '2ac7f43695eb0479d5846bb38eec59cc') {
            $('#alert-wrapper').html(alert_markup('danger', '<strong>Sorry!</strong> Your invite code is incorrect.'));
        } 
        else { */
            $.post('https://script.google.com/macros/s/AKfycbxCCMEj_6RNVce2ptfVPRBB9z5OSPRnSCqXAiNSxhHc036TxB3S-qABtqqM4JlWJ4Zr/exec', data)
                .done(function (data) {
                    console.log(data);
                    if (data.result === "error") {
                        $('#alert-wrapper').html(alert_markup('danger', data.message));
                    } else {
                        $('#alert-wrapper').html('');
                        $('#rsvp-modal').modal('show');
                    }
                })
                .fail(function (data) {
                    console.log(data);
                    $('#alert-wrapper').html(alert_markup('danger', '<strong>Sorry!</strong> There is some issue with the server. '));
                });
        //}
    });

});

/********************** Extras *********************/

// alert_markup
function alert_markup(alert_type, msg) {
    return '<div class="alert alert-' + alert_type + '" role="alert">' + msg + '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span>&times;</span></button></div>';
}