/**
 * Function - class
 * this function crates object, pushes object to array checks if field is empty etc
 *
 */
function Utils()
{
    var msg              = $('#danger').hide();
    var arrayOfObj       = [];
    var converted;
    this.obj;

    /**
     * isEmpty() -  function to validate field if there is a value continue and call next function
     * @param input - input text value from form field
     */
    this.isEmpty         = function(input){
        if(input === '')
        {
            msg.show();
        }
        else
        {
            msg.hide();
            this.createObject(input);
            input.val('');
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
     *
     * @param obj - current object made my function above
     */
    this.addObjectToArray = function(obj){
        arrayOfObj.push(obj);
    };

}
// end of the function

