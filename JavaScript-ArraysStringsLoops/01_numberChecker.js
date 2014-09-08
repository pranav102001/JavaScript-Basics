/**
 * Created by Venko on 7/25/2014.
 */
function printNumbers(n) {
    if(n<0){
        console.log("no");
    }
    for(var i=0;i<n;i++){
        if((i%4===0)||(i%5===0)){
            continue;
        }else{
            console.log(i);
        }
    }
}
printNumbers(20);
console.log('\n');
printNumbers(-5);
console.log('\n');
printNumbers(13);