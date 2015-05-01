/**
 * Database Adapter that will implement  working with database
 */
function DatabaseAdapter()
{
    //global varijables
    var utilObj   = new Utils();
    var value;

  //adding a task to the database
  this.addSingleTask           = function(input) {
      $.ajax({
          url: "/todoback/public/ajax/post/data",
          data: "input=" + input,
          dataType: "json",
          success: function(data)
          {
              //here i'm using cookie to store this because i can't get from ajax response function

          }
      });
      value = $.parseJSON($.cookie('ajax'));
      return value;

  };

  //get the data after refresh
  this.getDataAfterRefresh     = function(){
      $.getJSON("/todoback/public/ajax/get/data", {}, function(data) {

           $.cookie('after', JSON.stringify(data));
      });
      value = $.parseJSON($.cookie('after'));

      return value;


  };

  //deleting specified task from database object is DOM element
  this.deleteTask       = function(object){
    var idValue = $(object).prevAll('.check').val();
      $.ajax({
          url: "/todoback/public/ajax/delete/task",
          data: "id=" + idValue,
          dataType: "json"
      });
  };

  //delete selected tasks
  this.deleteCompleted   = function(){

  }


}