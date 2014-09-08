/**
 * Created by Venko on 7/25/2014.
 */
function createArray() {
    var arr = new Array(20);
    for(var i=0;i<20;i++){
        if(i==0){
            arr[i] = 1-1;
        }else{
            arr[i] = i*5;
        }

    }
    console.log(arr);
}
createArray();