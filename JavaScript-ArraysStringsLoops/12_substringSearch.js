/**
 * Created by Venko on 7/26/2014.
 */
function countSubstringOccur(value) {
    var keyWord = value[0];
    var text = value[1].toLowerCase();
    var count = 0;
    var something;

    for(var i=0;i<text.length;i++){
        if(text.indexOf(keyWord)>-1){
            count++;

        }
       something= text.slice(0,text.indexOf(keyWord)+keyWord.length);
       text = text.replace(something,'');
    }

    console.log(count);
}
countSubstringOccur(["in", "We are living in a yellow submarine. We don't have anything else. Inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days."]);
console.log('\n');
countSubstringOccur(['your', 'No one heard a single word you said. They should have seen it in your eyes. What was going around your head.']);
console.log('\n');
countSubstringOccur(['but', "But you were living in another world tryin' to get your message through."]);