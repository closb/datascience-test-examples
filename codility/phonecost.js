// write a function that given a string S describing phone calls returns the amount of money the company has to pay you in cents.
//
// example given a string S with N = 3 lines:
//
// "00:01:07,400-234-090\n00:05:01,701-080-080\n00:05:00,400-234-090"
// the function should return 900 ( the total duration of number 400-234-090 is 6 minutes 7 seconds, and the total duration of number 701-080-080 is 5 minutes 1 second, therefore the company has to pay you 900 cents)
//
function solution(S) {
    // write your code in JavaScript (Node.js 6.4.0)
    var lines = S.split("\n");
    var cost = 0;
    var numbers = {};
    for (var i = 0; i < lines.length; i++) {
        var line = lines[i];
        var time = line.split(',')[0];
        var number = line.split(',')[1];
        var seconds = time.split(':')[0] * 3600 + time.split(':')[1] * 60 + time.split(':')[2] * 1;
        if (numbers[number]) {
            numbers[number] += seconds;
        } else {
            numbers[number] = seconds;
        }
    }
    for (var key in numbers) {
        cost += Math.ceil(numbers[key] / 60) * 150;
    }
    return cost;
}