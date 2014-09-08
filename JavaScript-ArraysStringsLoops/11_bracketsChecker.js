/*** Created by Venko on 7/26/2014.*/
function checkBrackets(value){
    var openBracket = '(';
    var openCount=0;
    var closeBracket = ')';
    var closeCount=0;
    for(var i =0;i<value.length;i++){
        if(openBracket == value.charAt(i)){
            openCount++;
        } else if(closeBracket == value.charAt(i)){
            closeCount++;
        }
    }
    if(openCount==closeCount){
        console.log("correct");
    }else{
        console.log("incorrect");
    }
}
checkBrackets('( ( a + b ) / 5 – d )');
console.log('\n');
checkBrackets(') ( a + b ) )');
console.log('\n');
checkBrackets('( b * ( c + d *2 / ( 2 + ( 12 – c / ( a + 3 ) ) ) )');