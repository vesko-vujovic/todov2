/**
 * Function that will display data from cookie
 */
function Todo()
{
    //Global variables for this function
    var cookieName         = 'bild';
    var state;
    var returnedVal;
    this.utilsObj          = new Utils();
    this.adapter           = new Adapter('cookie');


    /**
     * this function first checks if we have something in the field, if we do then call main Adapter add function
     * from there adapter will call storage adapter or database adapter
     * @param input - text value from input field
     */
    this.callAdd           = function (input) {

      state =  this.utilsObj.isEmpty(input);

      if(state !== true)
      {
         returnedVal = this.adapter.addTask(input);
      }

    };







    //this function will display the data from the cookie, the last element in cookie
    this.getTheCookie   = function(){

        var parsedCookie = $.parseJSON($.cookie(''+ cookieName +''));
        var output       = this.utilsObj.helperMustache("templates/template.html #fill","fill", parsedCookie.pop());
    };

}

