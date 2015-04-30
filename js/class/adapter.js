/**
 * General adapter that will call cookie or database adapter based on parameter that is passed
 */
function Adapter(adapterName)
{
    //initialize objects of adapters
    var db       = new DatabaseAdapter();
    var cookie   = new CookieAdapter();

    //type of adapter
    var adapter = adapterName;

    //function that will delegate which adapter to call
    this.addTask          = function(input){

    };

    //function that will delegate which adapter delete method to call
    this.deleteTask       = function(){

    };

    //calling adapter delete method for checked checkboxes
    this.deleteCompleted = function(){

    }

    // deletes a node from the DOM
    this.deleteNode     = function(){
        $(this).parent().remove();
    }

    //delete checked values from the DOM
    this.deleteChecked  = function(){
        $('input:checked').parent().remove();
    }

}