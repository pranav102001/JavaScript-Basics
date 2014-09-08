/**
 * Created by Venko on 7/23/2014.
 */
function bitChecker(value){
    var bits = value.toString(2);
    if((bits>>3&1) === 1){
        console.log("true");
    }
    else{
        console.log("false");
    }
}
bitChecker(333);
bitChecker(425);
bitChecker(2567564754);
