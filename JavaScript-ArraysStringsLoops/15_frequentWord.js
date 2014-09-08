/*** Created by Venko on 7/27/2014.*/
function findMostFreqWord(value) {
    value = value.toLowerCase();
    value = value.split( /\W/);
    var text = new Array();
    var unSortedResult=new Array();
    text = value;
    var mostFrequent;
    var count;
    var maxCount = 0;
    var equalCount=1;
    var result;
    for(var l=0;l<text.length;l++){
        if(text[l].length<1){
            text.splice(l,1);
        }
    }
    for(var j=0;j<text.length;j++){
        mostFrequent = text[j];
        count=1;
        for(var i = j+1;i<text.length;i++){
            if(mostFrequent==text[i]){
                count++;
            }
            if(count>maxCount) {
                maxCount = count;
                result = mostFrequent;
                equalCount=count;
            }

        }
if(count == equalCount  && (equalCount!=1)){
            unSortedResult.push(mostFrequent);

        }
            unSortedResult.sort();

    }
    if(maxCount==equalCount){
        for(var n=0;n<unSortedResult.length;n++){
            console.log(unSortedResult[n] + " -> " + equalCount + " times")
        }
    }else{
        console.log(result + " -> " + maxCount + " times")
    }


}
findMostFreqWord('in the middle of the night');
console.log('\n');
findMostFreqWord('Welcome to SoftUni. Welcome to Java. Welcome everyone.');
console.log('\n');
findMostFreqWord('Hello my friend, hello my darling. Come on, come here. Welcome, welcome darling.');