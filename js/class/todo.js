$(document).ready(function(){
    var msg        = $('#danger').hide();
    var list       = $('#list');
    var input      = $('#todo');
    var arrayOfObj = [];

    /**
     * hjhklhklhkjhklj
     * lhkljhkhjlh
     * ljkhjkhklh
     *
     * @constructor
     */
    function Check()
   {
       this.obj;
       this.isEmpty         = function(input){
          if(input === '') { msg.show()} else{ msg.hide(); this.createObject(input); }
       };

       /**
        * khklhkhkhjkhjkhkhjhjhkhkljhljkhklhkl
        *
        * @param input - jhjklhljkhkljhjklhjkhjkhljhjklh
        */
       this.createObject   = function(input){
           this.obj        = new Object();
           this.obj.name   = "input";
           this.obj.value  = '' + input + '';
           this.addObjectToArray(this.obj);
       };
       this.addObjectToArray = function(obj){
           arrayOfObj.push(obj);
       }
   }
   //object for conversion and adding to cookie
   function Convert()
   {
       this.prepare      = function(){
          var convert    = JSON.stringify(arrayOfObj);
          function addToCookie(convert){$.cookie('todo2', convert)};
          addToCookie(convert);
       }
   }

   function Reading()
   {
       this.readCookie = function(){
         var parsedCookie = $.parseJSON($.cookie('todo2'));
           function readEverything(parsed){
               var lastOne = parsedCookie.pop();
               list.prepend('<li id="member"><input type="checkbox">' + lastOne.value + '<button class="delete">Delete</button></li>');
           }
           readEverything(parsedCookie);
       }
   }
   function After()
   {
       this.afterRefresh = function(){
           var parse = $.parseJSON($.cookie('todo2'));
           $.each(parse, function(index, value){
               list.prepend('<li id="member"><input type="checkbox">' + value.value + '<button class="delete">Delete</button></li>');
           });
       }
   }
    //events
    $('#add').on('click', function (event) {
        event.preventDefault();
        var  obj1    = new Check();
        obj1.isEmpty(input.val());
        var obj2     = new Convert();
        obj2.prepare();
        var obj3     = new Reading();
        obj3.readCookie();
    });

    $(document).on('click', '.delete', function(){
        $(this).parent().remove();
    });
    $('#clear').on('click', function(){
        $('input:checked').parent().remove();
    });
    $(function() {
       var refresh = new After();
       refresh.afterRefresh();
    });


});