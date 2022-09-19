// simple text editor (hackerrank)
// https://www.hackerrank.com/challenges/simple-text-editor/problem

function processData(input) {
    input = input.split('');
    let n = parseInt(input[0]);
    let stack = [];
    let text = '';
    for (let i = 1; i <= n; i++) {
        let op = input[i].split(' ');
        let opType = parseInt(op[0]);
        switch (opType) {
            case 1:
                stack.push(text);
                text += op[1];
                break;
            case 2:
                stack.push(text);
                text = text.substring(0, text.length - parseInt(op[1]));
                break;
            case 3:
                console.log(text[parseInt(op[1]) - 1]);
                break;
            case 4:
                text = stack.pop();
                break;
        }
    }
}

// Language: javascript
// Path: hackerrank/matchingOneOrMoreRepetitions.js
// matching one or more repetitions (hackerrank)
// https://www.hackerrank.com/challenges/matching-one-or-more-repetitions/problem

var Regex_Pattern = /^\d+[A-Z]+[a-z]+$/; //Do not delete '/'. Replace __________ with your regex.

// Language: javascript
// Path: hackerrank/matchingZeroOrMoreRepetitions.js
// matching zero or more repetitions (hackerrank)
// https://www.hackerrank.com/challenges/matching-zero-or-more-repetitions/problem

var Regex_Pattern = /^\d{2,}[a-z]*[A-Z]*$/; //Do not delete '/'. Replace __________ with your regex.

// Language: javascript
// Path: hackerrank/matchingSpecificString.js
// matching specific string (hackerrank)
// https://www.hackerrank.com/challenges/matching-specific-string/problem

var Regex_Pattern = 'hackerrank'; //Do not delete '/'. Replace __________ with your regex.

// Language: javascript
// Path: hackerrank/matchingEndingItems.js
// matching ending items (hackerrank)
// https://www.hackerrank.com/challenges/matching-ending-items/problem

var Regex_Pattern = /^[a-zA-Z]*s$/; //Do not delete '/'. Replace __________ with your regex.

// Language: javascript
// Path: hack