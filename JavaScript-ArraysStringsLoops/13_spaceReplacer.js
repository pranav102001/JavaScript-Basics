/**
 * Created by Venko on 7/27/2014.
 */
function replaceSpaces(value){
    var re = new RegExp(" ", 'g');
    var result;
     for(var i=0;i<value.length;i++){
          result = value.replace(re, " ");
     }

    console.log(value);
}
replaceSpaces("But you were living in another world tryin' to get your message through");