/**
 * Function that will display data from cookie
 */
function Todo()
{
    var cookieName       = 'bild';
    var list             = $('#list');
    var todoObj          = new Utils();

    /**
     * this function is converting array of objects to string and adding them to cookie
     * @param arrObj - array of objects
     */
    this.prepare         = function(arrObj){
        /**
         * @param converted  -  json string( array of objects)
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
            var lastOne  = parsedCookie.pop();
            list.prepend('<li id="member"><input type="checkbox">' + lastOne.value + '<button class="delete">Delete</button></li>');
        }
        readEverything(parsedCookie);
    };

    //function that displays data from cookie after refreshing the page
    this.afterRefresh   = function(){
        /**
         * @param parse - again parsing json string from cookie to array 
         */
        var parse = $.parseJSON($.cookie(''+ cookieName +''));
        $.each(parse, function(index, value){
            list.prepend('<li id="member"><input type="checkbox">' + value.value + '<button class="delete">Delete</button></li>');
        });
    };

}
