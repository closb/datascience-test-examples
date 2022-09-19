function superDigit(n,k){
    let sum = 0;
    for (let i = 0; i < n.length; i++) {
        sum += parseInt(n[i]);
    }
    sum *= k;
    while (sum > 9) {
        sum = superDigit(sum.toString(), 1);
    }
    return sum;

}

console.log(superDigit('148', 3));
