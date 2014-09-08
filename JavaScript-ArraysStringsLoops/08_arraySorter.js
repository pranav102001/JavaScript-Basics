/**
 * Created by Venko on 7/26/2014.
 */
function sortArray(value) {
    var result = new Array();
    var lenght = value.length;
    var min=value[0];
    var index = 0;

    for(var j=0;j<lenght;j++){
        for(var i=1;i<value.length;i++){
            if(min>=value[i]){
                min=value[i];
                index = value.indexOf(min);
            }else{
                index = value.indexOf(min);
            }
        }
    value.splice(index,1);
    result.push(min);
    min=value[0];
    }
    console.log(result);
}
sortArray([5, 4, 3, 2, 1]);
console.log('\n');
sortArray([12, 12, 50, 2, 6, 22, 51, 712, 6, 3, 3]);