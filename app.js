$(document).ready(function(){
    //object that we need to initialize
    var adapter     = new Adapt();

    var input     = $('#todo');

    //events to be completed upon some action
    $('#add').on('click', function (event) {
        event.preventDefault();
        todo.callUtil(input.val())
        input.val('');
    });

    $(document).on('click', '.delete',todo.deleteNode);
    $('#clear').on('click', todo.deleteChecked);

});