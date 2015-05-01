/**
 * Database Adapter that will implement  working with database
 */
function DatabaseAdapter()
{
    //global varijables
    var utilObj   = new Utils();
    var chained;
    var value;

  //adding a task to the database
  this.addSingleTask           = function(input) {
      $.ajax({
          async: false,
          url: "/todoback/public/ajax/post/data",
          data: "input=" + input,
          dataType: "json",
          success: function(data)
          {
              value = data;
          }
      });
      return value;
  };

  //get the data after refresh
  this.getDataAfterRefresh     = function(){
      $.ajax({
          async: false,
          url: "/todoback/public/ajax/get/data",
          dataType: "json",
          success: function(data)
          {
              value = data;
          }
      });

      return value;
  };

    //deleting specified task from database object is DOM element
    this.deleteTask       = function(object){
        var idValue = $(object).prevAll('.check').val();
        $.ajax({
            async: false,
            url: "/todoback/public/ajax/delete/task",
            data: "id=" + idValue,
            dataType: "json",
            success: function(data)
            {
                value = data;
            }
        });
        return value;
    };


  //delete selected tasks
  this.deleteCompleted   = function(){
      var ids = this.pickUpIds();
      $.ajax({
          url: "/todoback/public/ajax/delete/group",
          data: "ids=" + JSON.stringify(ids),
          dataType: "json",
          success: function(data)
          {
              value = data;
          }
      });

      return value;
  };

  //pick up selected ids
  this.pickUpIds        = function(){
      var checkedValues = $('.check:checked').map(function() {
          return this.value;
      }).get();
      return checkedValues
  }




}