/**
 * Function that will display data from cookie
 */
function Todo()
{
    var cookieName       = 'bild';
    var list             = $('#list');
    var utilsObj          = new Utils();

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

    //this function will display the data from the cookie, the last element in cookie
    this.readTheCookie   = function(){

        var parsedCookie = $.parseJSON($.cookie(''+ cookieName +''));
        var output       = this.helperMustache("templates/template.html #fill","fill", parsedCookie.pop());
    };

    //function that reads all data from cookie when page refreshes
    this.afterRefresh   = function(){
       var parsedCookie       = $.parseJSON($.cookie(''+ cookieName +''));

       if(parsedCookie.length > 0)
       {
           var output       = this.helperMustache("templates/template.html #fill","fill", parsedCookie);
           list.prepend(output);
       }
   };

    /**
     * initialize functions of other Utils class - function
     * @param input - text value from form field
     */
    this.callUtil       = function(input){
        utilsObj.isEmpty(input);
        this.prepare(utilsObj.arrayOfObj);
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

    // deletes a node from the DOM
    this.deleteNode     = function(){
        $(this).parent().remove();
    }

    //delete checked values
    this.deleteChecked  = function(){
        $('input:checked').parent().remove();
    }

}
