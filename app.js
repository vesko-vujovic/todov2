$(document).ready(function(){
    //object that we need to initialize
    var todo      = new Todo();
    todo.afterRefresh();
    var input     = $('#todo');


    //events to be completed upon some action
    $('#add').on('click', function (event) {
        event.preventDefault();
        utilsObj.isEmpty(input.val());
    });

    $(document).on('click', '.delete', function(){
        $(this).parent().remove();
    });
    $('#clear').on('click', function() {
        $('input:checked').parent().remove();
    });

});