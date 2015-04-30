/**
 * Function that will display data from cookie
 */
function Todo()
{
    var cookieName         = 'bild';
    this.utilsObj          = new Utils();
    this.adapter           = new Adapter('cookie');


    //this function will display the data from the cookie, the last element in cookie
    this.getTheCookie   = function(){

        var parsedCookie = $.parseJSON($.cookie(''+ cookieName +''));
        var output       = this.utilsObj.helperMustache("templates/template.html #fill","fill", parsedCookie.pop());
    };

}

