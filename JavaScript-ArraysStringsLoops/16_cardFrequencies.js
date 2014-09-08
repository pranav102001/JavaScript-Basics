/**
 * Created by Venko on 7/27/2014.
 */
function findCardFrequency(value){
    value = value.split(/\W/);
    var text = new Array();
    var checked = new Array();
    text = value;
    var mostFrequent;
    var count;
    var maxCount = 0;
    var result;
    for(var l=0;l<text.length;l++){
        if(text[l].length<1){
            text.splice(l,1);
        }
    }
    for(var j=0;j<text.length;j++){
        mostFrequent = text[j];
        count=1;
        for(var i = j+1;i<text.length;i++) {
            if (mostFrequent == text[i]) {
                count++;
                text[i]="";


            }
        }
        maxCount = count;
        result = mostFrequent;
        if(result.length<1){
            continue;
        }else{
            console.log(result + " -> " + ((maxCount/text.length)*100).toFixed(2) + "%")
        }



    }

}
findCardFrequency('8♥ 2♣ 4♦ 10♦ J♥ A♠ K♦ 10♥ K♠ K♦');
console.log('\n');
findCardFrequency('J♥ 2♣ 2♦ 2♥ 2♦ 2♠ 2♦ J♥ 2♠');
console.log('\n');
findCardFrequency('10♣ 10♥');