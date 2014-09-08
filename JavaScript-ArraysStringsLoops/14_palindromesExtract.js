/*** Created by Venko on 7/27/2014.*/
function findPalindromes(value) {
    value=value.toLowerCase();
    value = value.split( /\W/);
    value.pop();
    var text = new Array();
    text=value;
    for(var l=0;l<text.length;l++){
        if(text[l].length<1){
            text.splice(l,1);
        }
    }
    var isPol=true;
    var polinoms = new Array();
    for(var i = 0;i<text.length;i++){
        var word = text[i];
        for(var j= 0, k = word.length-1;j<(word.length/2);j++,k--){
            if(word[j]!=word[k]){
                isPol=false;
            }
        }
        if(isPol){
            polinoms.push(word);
        }
        isPol=true;
    }
    console.log(polinoms);
}
findPalindromes("There is a man, his name was Bob.");