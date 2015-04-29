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

        /**
         * @param converted  - conversion to json string( array of objects)
         */

        var converted    = JSON.stringify(arrObj);
        function addToCookie(convert){$.cookie(''+ cookieName +'', convert)};
        addToCookie(converted);
        this.readTheCookie();
    };

    //this is function in function it display an element from cookie
    this.readTheCookie   = function(){
        /**
         * @param parsedCookie  - converted json string to objects
         */
        var parsedCookie = $.parseJSON($.cookie(''+ cookieName +''));

        /**
         * @param parsed - parsed json string to array
         */
        function readEverything(parsed){
            var lastOne  = parsed.pop();
            var output   = this.helperMustache('templates/template.html #fill', '#templates','fill', lastOne);
            list.prepend(output);
        }
        readEverything(parsedCookie);
    };

    //function that displays data from cookie after refreshing the page
    this.afterRefresh   = function(){
        /**
         * @param parse - again parsing json string from cookie to array
         * @param fortuneCookie - initializing cookie
         */
        var  fortuneCookie = $.cookie(''+ cookieName +'');
        var  parse;

        // if we have something in cookie only then parse cookie
        if(fortuneCookie.length !== 0)
        {
            parse = $.parseJSON(fortuneCookie);
        }

        /**
         * if parsed cookie is not empty show the result on the page
         * first we call helper function to render our template
         */
        if( parse.length > 0)
        {
            //calling helper class to render view with all data
           var output = this.helperMustache('templates/template.html #fill', 'fill', parse);
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
     */
    this.helperMustache         = function(url, tempateId, data){
        /**
         * @param  url        - url that we need for $.load function
         * @param  target     - the place where we dump all data from $.load function
         * @param  output     - the rendered template
         * @param  data       - data for template
         * @param  templateId - id of external template
         */
       var url          = url;
       var templateId   = tempateId;
       var data         = data;
       var output;

        $("templates").load(''+ url + '', function(){
            var template = document.getElementById(''+ tempateId +'').innerHTML;
            var output = Mustache.render(url, data);
        });
        return output;
    }
    /**
     * function that deletes node from DOM
     */
    this.deleteNode     = function(){
        $(this).parent().remove();
    }

    /**
     * function for deleting checked fields
     */
    this.deleteChecked  = function(){
        $('input:checked').parent().remove();
    }

}
