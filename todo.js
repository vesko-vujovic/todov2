$(document).ready(function(){
    var msg        = $('#danger').hide();
    var list       = $('#list');
    var input      = $('#todo');
    var arrayOfObj = [];

    function Check()
   {
       this.obj;
       this.isEmpty         = function(input){
          if(input === '') { msg.show()} else{ msg.hide(); this.createObject(input); }
       };
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

   }





    $('#add').on('click', function (event) {
        event.preventDefault();
        var  obj1    = new Check();
        obj1.isEmpty(input.val());
        console.log(arrayOfObj);

    });


});