/**
 * Function that will display data from cookie
 */
function Todo()
{
    var cookieName       = 'bild';

    //this function is converting array of objects to string and adding them to cookie
    this.prepare         = function(arrObj){
        var converted    = JSON.stringify(arrObj);
        function addToCookie(convert){$.cookie(''+ cookieName +'', convert)};
        addToCookie(converted);
        this.readTheCookie();
    };

    //this is function in function it display an elemnt from cookie
    this.readTheCookie   = function(){
        var parsedCookie = $.parseJSON($.cookie(''+ cookieName +''));
        function readEverything(parsed){
            var lastOne  = parsedCookie.pop();
            list.prepend('<li id="member"><input type="checkbox">' + lastOne.value + '<button class="delete">Delete</button></li>');
        }
        readEverything(parsedCookie);
    };

    //function that displays data from cookie after refreshing the page
    this.afterRefresh   = function(){
        var parse = $.parseJSON($.cookie(''+ cookieName +''));
        $.each(parse, function(index, value){
            list.prepend('<li id="member"><input type="checkbox">' + value.value + '<button class="delete">Delete</button></li>');
        });
    };

}
