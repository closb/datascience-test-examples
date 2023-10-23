// language javascript

// path phoneBillCents.js
// write a function that given a string S describing phone calls returns the amount of money the company has to pay you in cents.

// example given a string S with N = 3 lines:
// "00:01:07,400-234-090
// 00:05:01,701-080-080

// 00:05:00,400-234-090"
// the function should return 900 ( the total duration of number 400-234-090 is 6 minutes 7 seconds, and the total duration of number 701-080-080 is 5 minutes 1 second, therefore the company has to pay you 900 cents)

// steps    1. split the string into an array of strings

//          2. loop through the array

//          3. split each string into an array of strings

//          4. if the current element is equal to the variable, increment the variable

//          5. return the variable

// /** */
function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    // split the string into an array of strings
    let arr = S.split("\n");
    // create an object to hold the phone numbers and their durations
    let obj = {};
    // loop through the array
    for (let i = 0; i < arr.length; i++) {
        // split each string into an array of strings
        let current = arr[i].split(",");
        // if the current element is equal to the variable, increment the variable
        if (obj[current[1]]) {
            // convert time to seconds
            obj[current[1]] += convertToSeconds(current[0]);
        } else {
            obj[current[1]] = convertToSeconds(current[0]);
        }
    }
    // create a variable to hold the total cost
    let total = 0;
    // loop through the object
    for (let key in obj) {
        // calculate the cost of each phone number

        total += calculateCost(obj[key]);
    }
    // return the total cost

    return total;
}
// convert time to seconds
function convertToSeconds(time) {
    // split the time into an array of strings
    let arr = time.split(":");
    // create a variable to hold the total seconds
    return Number(arr[0]) * 3600 + Number(arr[1]) * 60 + Number(arr[2]);
}

// create function to calculate cost
function calculateCost(seconds) {
    // if the seconds are less than or equal to 300
    if (seconds <= 300) {
        // return the seconds multiplied by 3
        return seconds * 3;
    } else {
        // return 900 plus the seconds minus 300 multiplied by 150
        return 900 + (seconds - 300) * 150;
    }
}
console.log(solution("00:01:07,400-234-090  00:05:01,701-080-080  00:05:00,400-234-090"));
// language javascript
