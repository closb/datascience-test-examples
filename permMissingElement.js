// write funtion that given an array A returns the value of the missing element

function solution(A) {      
    var n = A.length;
    var sum = (n + 1) * (n + 2) / 2;
    for (var i = 0; i < n; i++) {
        sum -= A[i];
    }
    return sum;
}