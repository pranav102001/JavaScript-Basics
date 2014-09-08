/**
 * Created by Venko on 7/26/2014.
 */
function findMostFreqNum(value) {
    var most;
    var count;
    var maxCount = 0;
    var result;
    for(var j=0;j<value.length;j++){
        most = value[j];
        count=1;
        for(var i = j+1;i<value.length;i++){
            if(most==value[i]){
            count++;
            }
            if(count>maxCount){
            maxCount=count;
            result=most;
            }
        }
    }
    console.log(result + "(" + maxCount + " times)")
}
findMostFreqNum([4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3]);
console.log('\n');
findMostFreqNum([2, 1, 1, 5, 7, 1, 2, 5, 7, 3, 87, 2, 12, 634, 123, 51, 1]);
console.log('\n');
findMostFreqNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);