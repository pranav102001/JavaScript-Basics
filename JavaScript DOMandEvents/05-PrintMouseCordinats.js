/**
 * Created by Venko on 7/28/2014.
 */
function printMouseCoordinates(ev){
    document.body.innerHTML += 'X: ' + ev.pageX + '; Y: ' + ev.pageY + '; Time: ' + new Date() + '</br>';
}

document.addEventListener('mouseover', printMouseCoordinates, false);
