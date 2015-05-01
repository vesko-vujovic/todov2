/**
 * Cookie adapter that implement working with cookie storage
 */
function CookieAdapter()
{
    //our global variables
    var parsedCookie;
    var elementValue;
    var data;
    var cookieName        = 'bild';
    this.arrayOfObj       = [];
    this.obj;
    var utilObj = new Utils();

    //this function will call other functions that we need for adding task to cookie
    this.addTaskSteps           = function(input) {

        //parsedcookie is a parsed json string ready to read
        this.createObject(input);
        return parsedCookie;

    };

    //deleting specified node here we call function that will delete that value from cookie
    this.deleteTask             = function(object){

        //this is text value from the clicked element
        elementValue =  $(object).prevAll('span').text();
        this.removeObjectFromTheCookie(elementValue);
        console.log(elementValue);
        return data;

    };

    //delete checked tasks
    this.deleteCompleted              = function(object){
        $('input:checked').parent().remove();
    };

    //this function will remove specified object from array
    this.removeObjectFromTheCookie    = function(value){

        data = $.parseJSON($.cookie(''+cookieName+''));

        //this is a loop that matches the finds value of object and removes that object from array
        for(var i = 0; i < data.length; i++) {
            if(data[i].value === ''+ value +'') {
                data.splice(i, 1);
                break;
            }
        }
        $.cookie(''+cookieName+'',JSON.stringify(data));
        
        return data;


    }

    /**
     * These section is for preparing array of objects to be added into the cookie
     * Here we have functions that will create oobjects, push them on array,
     * convert them to json string and add them to cookie(because cookie only can store strings)
     * after that we pass json object to Adapter and adapter to other functions that know how to
     * render passed data.
     */

    /**
     * This function create object and adds input value to a object property
     * Then we have a call to function that pushes that object on array
     * @param input - value of input field
     */
    this.createObject   = function(input){
        this.obj        = new Object();
        this.obj.name   = "input";
        this.obj.value  = '' + input + '';
        this.addObjectToArray(this.obj);
    };

    /**
     *
     * @param obj - current object made my function above
     */
    this.addObjectToArray = function(obj){
        this.arrayOfObj.push(obj);
        this.prepare(this.arrayOfObj);
    };

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
        this.readTheCookie();
    };

    this.readTheCookie   = function(){
       parsedCookie  = $.parseJSON($.cookie(''+ cookieName +''));
       return parsedCookie;
    };



}