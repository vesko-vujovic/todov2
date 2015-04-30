/**
 * Function that will display data from cookie
 */
function Todo()
{
    //Global variables for this function
    var cookieName         = 'bild';
    var adapterType        = 'cookie';
    var state;
    var url;
    var returnedVal;
    this.utilsObj          = new Utils();
    this.adapter           = new Adapter(adapterType);

    //assign the right url for Mustache templating engine based on adapter type
    adapterType === 'cookie' ? url = 'templates/template.html #after': url = 'templates/template.html #after';

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

    this.renderView       = function(data){
      this.utilsObj.helperMustache('templates')
    };

}

