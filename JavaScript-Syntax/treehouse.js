/**
 * Created by Venko on 7/23/2014.
 */
function treeHouseCompare(house, tree){
    var houseArea =house*house + (Math.sqrt(3)*house*house)/4;
    var treeArea =tree*(tree/3)+ Math.PI*((2*tree)/3)*((2*tree)/3);

    if (houseArea > treeArea) {
        console.log("house/" + houseArea.toFixed(2));
    } else {
        console.log("tree/" + treeArea.toFixed(2));
      }
}
treeHouseCompare(3,2);
treeHouseCompare(3,3);
treeHouseCompare(4,5);