/**
 * Created by Venko on 7/23/2014.
 */
function calcSupply(age, maxage,food){
    var yearsLeft = maxage-age;
    var foodLeft = 365*yearsLeft*food;
    console.log(foodLeft + "kg of nuts would be enough until I am " + maxage + " years old." );
}
calcSupply(38,118,0.5);