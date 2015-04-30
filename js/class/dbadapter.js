/**
 * Database Adapter that will implement  working with database
 */
function DatabaseAdapter()
{
    //global varijables
    var utilObj   = new Utils();
    this.value;

  //adding a task to the database
  this.addSingleTask           = function(input) {
      $.ajax({
          async: false,
          url: "/todoback/public/ajax/post/data",
          data: "input=" + input,
          dataType: "json",
          success: function(data)
          {
              this.value = data;
          }

      });

      console.log(this.value);

  };

  //deleting specified task from database
  this.deleteTask       = function(){

  };

  //delete selected tasks
  this.deleteCompleted   = function(){

  }


}