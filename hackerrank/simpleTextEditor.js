// simple text editor (hackerrank)
// https://www.hackerrank.com/challenges/simple-text-editor/problem

// create an array for all of the operations
let operation = input.split('\n');
let s = '';
let state = [''];
let statePointer = -1;

for (let i = 1; i < operation.length; i++) {
  switch (operation[i].charAt(0)) {
    case '1':
      // append
      s += operation[i].slice(2);
      state.push(s);
      break;
    case '2':
      // delete
      let delNum = parseInt(operation[i].slice(2));
      s = s.slice(0, s.length - delNum);
      state.push(s);
      break;
    case '3':
      // print the kth character
      k = parseInt(operation[i].slice(2));
      console.log(s.charAt(k - 1));
      break;
    case '4':
      // reverse the previous operation
      state.pop();
      s = state[state.length - 1];
      break;
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
