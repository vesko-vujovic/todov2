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
          success: getData
      });

      function getData(data)
      {
         value = data;
      }
      console.log(this.value);

  };

  //deleting specified task from database
  this.deleteTask       = function(){

  };

  //delete selected tasks
  this.deleteCompleted   = function(){

  }


}