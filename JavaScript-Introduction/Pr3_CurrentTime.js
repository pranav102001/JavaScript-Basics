/**
 * Created by Venko on 7/20/2014.
 */
var currentDate = new Date();
var hour = currentDate.getHours();
var minute = ((currentDate.getMinutes() < 10) ? ("0" + currentDate.getMinutes()) : (currentDate.getMinutes()))
console.log(hour + ":" + minute);
