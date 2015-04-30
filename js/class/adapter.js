/**
 * General adapter that will call cookie or database adapter based on parameter that is passed
 */
function Adapter(adapterName)
{
    //initialize objects of adapters
    var db       = new DatabaseAdapter();
    var cookie   = new CookieAdapter();



    var adapter = adapterName;

    //function that will delegate which adapter to call
    this.addTask          = function(){

    };

    //function that will delegate which adapter delete method to call
    this.deleteTask       = function(){

    };

    //calling adapter delete method for checked checkboxes
    this.deleteCompleted = function(){

    }


}