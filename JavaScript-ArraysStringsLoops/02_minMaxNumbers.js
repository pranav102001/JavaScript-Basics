/**
 * Created by Venko on 7/25/2014.
 */
function findMinAndMax(value){
    var min = value[0];
    var max = value[0];
    for(var i=1;i<value.length;i++){
       if(min>value[i]){
           min=value[i];
       }
    }
    for(var i=1;i<value.length;i++){
        if(max<value[i]){
            max=value[i];
        }
    }
    console.log("Min -> " + min);
    console.log("Max -> " + max);
}
findMinAndMax([1, 2, 1, 15, 20, 5, 7, 31]);
console.log('\n');
findMinAndMax([2, 2, 2, 2, 2]);
console.log('\n');
findMinAndMax([500, 1, -23, 0, -300, 28, 35, 12]);