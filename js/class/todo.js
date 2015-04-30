/**
 * Function that will display data from cookie
 */
function Todo()
{
    var cookieName       = 'bild';
    this.utilsObj          = new Utils();

    /**
     * this function is converting array of objects to string and adding them to cookie
     * @param arrObj - array of objects
     */
    this.prepare         = function(arrObj){

        //converted  - is array of object converted to json string
        var converted    = JSON.stringify(arrObj);
        this.addToCookie(converted);
    };

    /**
     * This is a simple functions that puts everything in cookie
     * @param converted - is converted array of objects to json ready to be added to cookie
     */
    this.addToCookie     = function(converted){
        var add = $.cookie(''+ cookieName +'', converted);
        this.getTheCookie();
    };

    //this function will display the data from the cookie, the last element in cookie
    this.getTheCookie   = function(){

        var parsedCookie = $.parseJSON($.cookie(''+ cookieName +''));
        var output       = this.utilsObj.helperMustache("templates/template.html #fill","fill", parsedCookie.pop());
    };


    // deletes a node from the DOM
    this.deleteNode     = function(){
        $(this).parent().remove();
    }

    //delete checked values
    this.deleteChecked  = function(){
        $('input:checked').parent().remove();
    }
}

//Class - Functions for dealing with database storage
function DatabaseStorage()
{
    //initialize adapter object
    var adapter   = new Adapt();

    //ajax request for deleting one element
    this.deleteElement     = function(){

    };

    //ajax request for deleting selected elements
    this.deleteSelection   = function(){

    };

    //ajax request for loading data after refresh
    this.loadAfterRefresh  = function(){

    };

    //add input to database
    this.addToDatabase    = function(){

    };


}
