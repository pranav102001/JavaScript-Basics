/**
 * Created by Venko on 7/24/2014.
 */
function checkDigit (value){
if(value<1000){
    console.log("Wrong Number");
}
   value= value/100;
    var digit = Math.floor(value%10);
    if(digit===3){
        console.log("true");
    } else {
        console.log("false");
    }
}
checkDigit(1235);
checkDigit(25368);
checkDigit(123456);