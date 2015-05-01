/**
 * Function - class
 * this function crates object, pushes object to array checks if field is empty etc
 */
function Utils()
{
    //variables for this function
    var msg               = $('#danger').hide();
    var converted;
    var list             = $('#list');
    this.arrayOfObj       = [];
    this.obj;

    /**
     * isEmpty() -  function to validate field if there is a value continue and call next function
     * @param input - input text value from form field
     */
    this.isEmpty         = function(input){
        if(input === '')
        {
            msg.show();
            return true;
        }
        else
        {
            msg.hide();
            return false;
        }
    };
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
     * this is helper function to call rendering method of mustache
     * @param url - the url to load the document
     * @param templateId - id of external file template
     */
    this.helperMustache         = function(url, tempateId, data){

        // assigning parameters to variables
        var url          = url;
        var templateId   = tempateId;
        var data         = data;
        var output;

        $("#templates").load(""+ url +"", function(){
            var template = document.getElementById(''+ tempateId +'').innerHTML;
            var output = Mustache.render(template, { arr: data});
            list.empty();
            list.prepend(output);
        });

    };

    /**
     * This function adds object to array
     * @param obj - current object made my function above
     */
    this.addObjectToArray = function(obj){
        this.arrayOfObj.push(obj);
    };

    /**
     * small sleep function that will delay execution of other function
     */
   this.time_sleep_until  = function(timestamp){
       //  discuss at: http://phpjs.org/functions/time_sleep_until/
       // original by: Brett Zamir (http://brett-zamir.me)
       //        note: For study purposes. Current implementation could lock up the user's browser.
       //        note: Expects a timestamp in seconds, so DO NOT pass in a JavaScript timestamp which are in milliseconds (e.g., new Date()) or otherwise the function will lock up the browser 1000 times longer than probably intended.
       //        note: Consider using setTimeout() instead.
       //   example 1: time_sleep_until(1233146501) // delays until the time indicated by the given timestamp is reached
       //   returns 1: true

       while (new Date() < timestamp * 1000) {}
       return true;
   };

}






