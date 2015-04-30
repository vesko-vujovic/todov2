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
          setData(data);
      }

      console.log(value);
  };

    /**
     *  I need this function to set data from ajax response to my global variable because
     *  ajax is asynchronous, the only way is to make it non-asynchronous but that not recomendable
     *  and deprecated
     */
  function setData(data){
      value = data;
      return
  }



  //deleting specified task from database
  this.deleteTask       = function(){

  };

  //delete selected tasks
  this.deleteCompleted   = function(){

  }


}