/**
 * General Adapter that will call cookie or database adapter based on parameter that is passed
 */
function Adapter(adapterType)
{
    //initialize objects of adapters
    var dbAdapter       = new DatabaseAdapter();
    var cookieAdapter   = new CookieAdapter();

    //type of adapter
    var adapterType     = adapterType;

    //function that will delegate which adapter to call
    this.addTask          = function(input){
       if(adapterType === 'cookie')
       {
          var value = cookieAdapter.addTaskSteps(input);
          return value;
       }
       else
       {
          var value =  dbAdapter.addSingleTask(input);
          return value;
       }
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
    //@param object - this is event listener object which is carrying DOM node
    this.deleteNode     = function(object){
        if(adapterType === 'cookie')
        {
            cookieAdapter.deleteTask(object);
        }
        else
        {

        }

    };

    //delete checked values from the DOM
    this.deleteChecked  = function(object){
        if(adapterType === 'cookie')
        {
            cookieAdapter.deleteCompleted(object);
        }
        else
        {

        }
    }
}