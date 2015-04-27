/**
 * Function - class
 * this function crates object, pushes object to array checks if field is empty etc
 *
 */
function Utils()
{
    var msg              = $('#danger').hide();
    var list             = $('#list');
    var arrayOfObj       = [];
    var converted;
    this.obj;

    // function to validate field if there is a value continue and call next function
    this.isEmpty         = function(input){
        if(input === '')
        {
            msg.show();
        }
        else
        {
            input.empty();
            msg.hide();
            this.createObject(input);
        }
    };
    /**
     * This function create object and adds input value to a object property
     * Then we have a call to function that pushes that object on array
     * @param input
     */
    this.createObject   = function(input){
        this.obj        = new Object();
        this.obj.name   = "input";
        this.obj.value  = '' + input + '';
        this.addObjectToArray(this.obj);
    };

    //simple function to push object on array of other objects
    this.addObjectToArray = function(obj){
        arrayOfObj.push(obj);
    };

    //this function returns the value of global array
    this.getArrayOfObjects = function(){
        return arrayOfObj;
    }
}
// end of the function

