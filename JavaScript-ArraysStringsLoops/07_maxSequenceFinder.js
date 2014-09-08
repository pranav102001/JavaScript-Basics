/*** Created by Venko on 7/25/2014.*/
function findMaxSequence(value) {
    var currentSequence = 1,
        longestSequence = 1,
        indexOfLongest;

    for (var i = 0; i < value.length; i++) {
        if (value[i] < value[i + 1]) {
            currentSequence++;
        } else {
            if (longestSequence < currentSequence) {
                longestSequence = currentSequence;
                indexOfLongest = i - currentSequence + 1;
            }
            currentSequence = 1;
        }
    }

    if (longestSequence < 2) {
        console.log("no");
    }
    else {
        var result = value.slice(indexOfLongest, indexOfLongest + longestSequence);
        console.log('[' + result + ']');
    }

}
findMaxSequence([3, 2, 1]);
console.log('\n');
findMaxSequence([3, 5, 4, 6, 1, 2, 3, 6, 10, 32]);
console.log('\n');
findMaxSequence([3, 2, 3, 4, 2, 2, 4]);
