$(document).ready(function(){
	function validateAll() {
    var valid = true;
    $('form').find('.validate-field').each(function (i, e) {
        if (!validate($(this))) {
           valid = false;
            return;
        }
    });
    return valid;
}

function validate(field){
    var value = field.val();
    var to_label = field.parent().find('.errorMessageBlock');
	 var to_label_form_group = field.parent();
    var error = false;
    var error_message = '';

    to_label.find('span').remove();

    if ( field.hasClass('validate-field') && value == '' ) {
        error = true;
        error_message = 'Empty Field';  
		
    } else if ( field.hasClass('valid-name') && valid_name(value) == false ) {
        error = true;
        error_message = 'Enter Charecters Only';
		
    } else if ( field.hasClass('valid-mail') && valid_email(value) == false ) {
        error = true;
        error_message = 'Invalid Email';
    } else if ( field.hasClass('valid-phone') && valid_phone(value) == false ) {
        error = true;
        error_message = 'Your phone must be digits only';
    }else if ( field.hasClass('valid-text') && valid_text(value) == false ) {
        error = true;
        error_message = 'Special Charecters allowed';
    };
    
    if (error) {
        to_label.append("<span class='error_message_color'>"+ error_message +"</span>");
		field.css("border", "1px solid red");
		to_label_form_group.removeClass('correctIcon');
		to_label_form_group.addClass('errorIcon');
		
		
		
    }else{
		field.css("border", "1px solid green");
		to_label_form_group.removeClass('errorIcon');
		to_label_form_group.addClass('correctIcon');
		
	}
    
    return !error;

};


$('.validate-field').on('keyup', function(){
    validate( $(this) );
});

function valid_name(value){
    var valid =/^([a-zA-Z]+\s?)*$/;
	
	
	
    return valid.test(value);
};

function valid_email(value){
    var valid = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return valid.test(value);
};

function valid_phone(value){
    var valid = /^\d{10}$/;
    return valid.test(value);
};
function valid_text(value){
    var valid = /^[a-zA-Z0-9!(),.$% ]+$/;
    return valid.test(value);
};

$('#validate').click(function () {
    if (validateAll()) {
        alert(valid_phone(value));
    } else {
        alert("Not valid");
    }
});
});