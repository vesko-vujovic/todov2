/**
 * Function - class
 * this function crates object, pushes object to array checks if field is empty etc
 */
function Utils()
{
    //variables for this function
    var msg              = $('#danger').hide();
    var converted;
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
            var output = Mustache.render(template, data);
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

}
// end of the function


/**
 * Adapter function for switching storage between cookie and database
 * @param - string
 */
function Adapt(storage)
{
    // variable that sets way of storage
    var storage       = storage;

    //Objects initialization
    this.todoObj       = new Todo();
    var databaseObj   = new DatabaseStorage();

    //function that delegates which delete method to call
    this.deleteNode    = function(){
       storage === 'cookie'? todoObj.deleteNode(): databaseObj.deleteElement();
    };

    //function that delegates which delete method to call
    this.deleteSelected = function(){

    };

    //adds input field value to cookie or to database
    this.addInput       = function(){

    };

    //display data after reload with cookie or with database
    this.afterReload    = function(){

    };







}


