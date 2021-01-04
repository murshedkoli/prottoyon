$(document).ready(function(){
    $('.sendButton').attr('disabled',true);
    
    $('#name').keyup(function(){
        if($(this).val().length !=0){
            $('.sendButton').attr('disabled', false);
        }
        else
        {
            $('.sendButton').attr('disabled', true);        
        }
    })
});

$(document).ready(function(){
    $('.sendButton').attr('disabled',true);
    
    $('#father').keyup(function(){
        if($(this).val().length !=0){
            $('.sendButton').attr('disabled', false);
        }
        else
        {
            $('.sendButton').attr('disabled', true);        
        }
    })
});

$(document).ready(function(){
    $('.sendButton').attr('disabled',true);
    
    $('#mother').keyup(function(){
        if($(this).val().length !=0){
            $('.sendButton').attr('disabled', false);
        }
        else
        {
            $('.sendButton').attr('disabled', true);        
        }
    })
});


$(document).ready(function(){
    $('.sendButton').attr('disabled',true);
    
    $('#village').keyup(function(){
        if($(this).val().length !=0){
            $('.sendButton').attr('disabled', false);
        }
        else
        {
            $('.sendButton').attr('disabled', true);        
        }
    })
});


$(document).ready(function(){
    $('.sendButton').attr('disabled',true);
    
    $('#ward').keyup(function(){
        if($(this).val().length !=0){
            $('.sendButton').attr('disabled', false);
        }
        else
        {
            $('.sendButton').attr('disabled', true);        
        }
    })
});

