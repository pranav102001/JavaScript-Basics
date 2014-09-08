/**
 * Created by Venko on 7/25/2014.
 */
function displayProperties(value) {
    var result = "";
    var arrayOfProps = [];
    for (var prop in value) {
        arrayOfProps.push(prop);
    }
    arrayOfProps.sort();
    for (var i = 0; i < arrayOfProps.length; i++) {
        result += arrayOfProps[i] + "\n";
    }
    return result;
}

console.log(displayProperties(document));