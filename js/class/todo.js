/**
 * Function that will display data from cookie
 */
function Todo()
{
    //Global variables for this function
    var cookieName         = 'bild';
    var state;
    this.utilsObj          = new Utils();
    this.adapter           = new Adapter('cookie');


    //add function that will call adapter function and then he will call right adapter (cookie or database)
    this.callAdd           = function (input) {

      state =  this.utilsObj.isEmpty(input);

      if(state !== true)
      {
          this.adapter.addTask(input);
      }

    };







    //this function will display the data from the cookie, the last element in cookie
    this.getTheCookie   = function(){

        var parsedCookie = $.parseJSON($.cookie(''+ cookieName +''));
        var output       = this.utilsObj.helperMustache("templates/template.html #fill","fill", parsedCookie.pop());
    };

}

