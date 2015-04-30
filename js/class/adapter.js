/**
 * General adapter that will call cookie or database adapter based on parameter that is passed
 */
function Adapter(adapterType)
{
    //initialize objects of adapters
    var dbAdapter       = new DatabaseAdapter();
    var cookieAdapter   = new CookieAdapter();

    //type of adapter
    var adapterType = adapterType;

    //function that will delegate which adapter to call
    this.addTask          = function(input){
       if(adapterType === 'cookie')
       {
          var value = cookieAdapter.addTaskSteps(input);
          return value;
       }
       else
       {
          var value =  dbAdapter.addTask(input);
          return value;
       }
    };

    //function that will delegate which adapter delete method to call
    this.deleteTask       = function(){

    };

    //calling adapter delete method for checked checkboxes
    this.deleteCompleted = function(){

    };

    this.after           = function(){
        if(adapterType === 'cookie')
        {
            var value = cookieAdapter.readTheCookie();
            return value;
        }
        else
        {

        }
    };

    // deletes a node from the DOM
    this.deleteNode     = function(object){
        if(adapterType === 'cookie')
        {
            cookieAdapter.deleteTask(object);
        }
    }

    //delete checked values from the DOM
    this.deleteChecked  = function(){
        $('input:checked').parent().remove();
    }

}