$(document).ready(function(){
    //object that we need to initialize
    var todo      = new Todo();
    todo.afterRefresh();
    var input     = $('#todo');


    //events to be completed upon some action
    $('#add').on('click', function (event) {
        event.preventDefault();
        todo.callUtil(input.val())
    });

    $(document).on('click', '.delete',todo.deleteNode);
    $('#clear').on('click', todo.deleteChecked);

});