/**
 * Created by Venko on 7/22/2014.
 */
function isPrime(num) {
    if(num < 2) return false;
    for (var i = 2; i < num; i++) {
        if(num%i==0)
            return false;
    }
    return true;
}
if(isPrime(7)){console.log("true")}else{console.log("false")};
if(isPrime(254)){console.log("true")}else{console.log("false")};
if(isPrime(587)){console.log("true")}else{console.log("false")};


