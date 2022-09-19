// given an unsorted array of n elements, find if the K element is in the array
// if it is, return YES, otherwise return NO

function findNumber(arr, k) {
    return arr.indexOf(k) > -1 ? "YES" : "NO";
}

// given two integers i and r print all the odd numbers between them
function oddNumbers(l, r) {
    let odd = [];
    for (let i = l; i <= r; i++) {
        if (i % 2 !== 0) {
            odd.push(i);
        }
    }
    return odd;
}
