$(document).ready(function(){
    //object that we need to initialize
    var todoObject    = new Todo();
    todoObject.afterRefresh();
    var input     = $('#todo');

    //events on actions
    $('#add').on('click', function (event) {
        event.preventDefault();
        todoObject.callAdd(input.val());
        input.val('');
    });
    //delete task event
    $(document).on('click','.delete', function(){
        todoObject.deleteOneTask(this);
    })


});