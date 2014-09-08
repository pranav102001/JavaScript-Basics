/**
 * Created by Venko on 7/25/2014.
 */
function compareChars(arr1, arr2) {
    var areEqual=true;
    if(arr1.length!=arr2.length){
        console.log("Not Equal");return;
    }else{
        for(var i=0;i<arr1.length;i++){
            if(arr1[i]!==arr2[i]) {
                areEqual = false;
                console.log("Not Equal");
                return;
            }
        }
    }
    if(areEqual){
        console.log("Equal");
    }
}
compareChars(['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q'],
        ['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q']
)
console.log('\n');
compareChars(['3', '5', 'g', 'd'],
        ['5', '3', 'g', 'd']
)
console.log('\n');
    compareChars(['q', 'g', 'q', 'h', 'a', 'k', 'u', '8', '}', 'q', '.', 'h', '|', ';'],
            ['6', 'f', 'w', 'q', ':', '”', 'd', '}', ']', 's', 'r']
    )