/**
 * Created by Venko on 7/25/2014.
 */
function findMaxSequence(value) {
    var maxSeq = new Array();
    var seq = new Array();
    var count=1;
    var maxCount = 1;
    for(var i=1;i<value.length;i++){
        if(value[i-1]===value[i]) {
            count++;
            if (count >= maxCount) {
                maxCount = count;
                maxSeq[0]=(value[i-1]);
            }
        } else{
            count=1;
        }
    }
    for(var j=0;j<maxCount;j++) {
        if(maxCount===1){
            seq.push(value[0]);
            console.log(seq);
            return;
        } else{
            seq.push(maxSeq[0]);
    }     }
    console.log(seq);
}
findMaxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
console.log('\n');
findMaxSequence(['happy']);
console.log('\n');
findMaxSequence([2, 'qwe', 'qwe', 3, 3, '3']);