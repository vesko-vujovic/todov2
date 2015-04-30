$(document).ready(function(){
    //object that we need to initialize
    var todoObject    = new Todo();
    var input     = $('#todo');

    //events on actions
    $('#add').on('click', function (event) {
        event.preventDefault();
        todoObject.callAdd(input.val());
        input.val('');
    });


});