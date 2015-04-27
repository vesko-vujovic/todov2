$(document).ready(function(){
    //object that we need to initialize
    var utilsObj  = new Utils();
    var todoObj   = new Todo();
    var input     = $('#todo');
    todoObj.afterRefresh();

    //events to be completed upon some action
    $('#add').on('click', function (event) {
        event.preventDefault();
        utilsObj.isEmpty(input.val());
        var arrayOfObj = utilsObj.getArrayOfObjects();
        todoObj.prepare(arrayOfObj);

    });

    $(document).on('click', '.delete', function(){
        $(this).parent().remove();
    });
    $('#clear').on('click', function() {
        $('input:checked').parent().remove();
    });

});