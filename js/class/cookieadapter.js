/**
 * Cookie adapter that implement working with cookie storage
 */
function CookieAdapter()
{
    this.arrayOfObj       = [];
    this.obj;
    var utilObj = new Utils();

    //this function will call other fnctions that we need for adding task to cookie
    this.addTaskSteps           = function(input) {

    };

    //deleting specified node
    this.deleteTask             = function(){

    };

    //delete checked tasks
    this.deleteCompleted        = function(){

    };
    
    /**
     * These section is for preparing array of objects to be added into the cookie
     * Here we have functions that will create oobjects, push them on array,
     * convert them to json string and add them to cookie(because cookie only can store strings)
     * after that we pass json object to Adapter and adapter to other functions that know how to
     * render those data.
     */






}