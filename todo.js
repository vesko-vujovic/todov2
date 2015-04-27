$(document).ready(function(){
    var msg        = $('#danger').hide();
    var list       = $('#list');

   function Check(e)
   {   
       this.inputVal        =  $('#todo').val();
       this.message         = msg;
       this.arrayOfObj      = [];
       this.obj;
       this.isEmpty         = function(){
           this.inputVal == '' ? this.message.show(): this.createObject(), this.message.hide(), this.inputVal = '';
       };
       this.createObject    = function(){
           obj        = new Object();
           obj.name   = "input";
           obj.value  = '' + this.inputVal + '';
           this.addObjectToArray(obj);
           console.log(obj);
       };
       this.addObjectToArray = function(obj){
           this.arrayOfObj.push(obj);
           console.log(arrayOfObj);
       }

   }


    $('#add').on('click', function (event) {
        event.preventDefault();
        var  obj1 = new Check();
             obj1.isEmpty();
    });


});