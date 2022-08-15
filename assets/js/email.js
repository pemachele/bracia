
function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}


function  send_email() {
    // code fragment

    if (isEmail($('#email').val())) {
        var data = {
            service_id: 'service_vcqb0wb',
            template_id: 'template_w5bj1y4',
            user_id: 'f8_cyTe-sHtyUxgqs',
            template_params: {
                'from_name': $('#name').val(),
                'from_phone':  $('#phone').val(),
                'from_email':  $('#email').val(),
                'message': $('#message').val(),
                'g-recaptcha-response': '03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...'
            }
        };

        $('#submit-container').append('<div  id="loading-spinner" class="spinner-border" role="status">\n' +
            '                                                    <span class="sr-only">Loading...</span>\n' +
            '                                                </div>')

        $('#email-submit').remove()


        $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json'
        }).done(function() {
            $('#submit-container').append(' <input id="email-submit" class="readon submit" type="submit" value="Submit Now">')

            $('#loading-spinner').remove()

        }).fail(function(error) {
            $('#submit-container').append(' <input id="email-submit" class="readon submit" type="submit" value="Submit Now">')

            $('#loading-spinner').remove()
        });
// code fragment
    } else{
        alert('Oops wrong email');
    }

}