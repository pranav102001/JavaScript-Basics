/**
 * Created by Venko on 7/23/2014.
 */
  function divisionBy3(value){
    var sum = 0;
    var digit;
    while (value>0){
        digit = value % 10;
        sum = sum + digit;
        value =Math.floor( value / 10);
            }

if(sum%3===0){
    console.log("the number is divided by 3 without remainder");
}
else{
    console.log("the number is not divided by 3 without remainder");
}
}
divisionBy3(12);
divisionBy3(188);
divisionBy3(591);
