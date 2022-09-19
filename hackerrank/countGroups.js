// subscriber can gift from his/her library

// first time subscriber can recieve up to a max of N audiobooks from friends and family

// when non subscriber recieves an audiobook we can infer they are not related

// similarly we can infer that if non sub recieves from two subscribers we can infer that all of the are related and the three form a group.

// more formally a group is composed of all of the people who know one another where directly or transitely 

// audible wants help finding out the number of such distinct groups from input data

// example consider following matrix M
// 110
// 110
// 001
//     0   1   2
// 0   1   1   0
// 1   1   1   0
// 2   0   0   1

// every row corresponds to subscriver and the value M[i][j] determins if [j] was a gifted book by [i]

// example above user 0 has gifted a book to user 1 and so they are connedtec [0][1] while person 2 has not recieved a book from anyone or gifted book to anyone, therefore there are two groups
// M[i][j] = 1 if i == j (each of the people is known to self)

// determine the number of groups represented in a matrix

// note the method signatres may vary slightly dependending on the requirements of the chosen language

// function description

// countGroups has the following parameters
// int related[n] - an array of strings of binary digits related[i] that represent connections of people

// returns int - an integer that represents the number of groups of people

// constraints
// 1 <= n <= 300
// o <= i <= n
// |related| = n
// each related[i] contains a binary string of n zeros and ones. related is a squate matrix.

// input from stdin will be processed as follows and passed to the funtion

// The first line contains an integer n, the size of the sqaure association matric related 
// the next n lines each contain a binary string of lenght n that represents a rown in the matrix related[i] where 0 <=i<n

// stdin function
// 4 -> size of related[] n = 4
// 1100 -> related = ['1100', '1110', '0110', '0001']
// 1110
// 0110
// 0001

// output to stdout
// 2 -> number of groups
'use strict';

let related = ['1100', '1110', '0110', '0001'];

function countGroups(related) {
    // Write your code here
    let relatedArr = related.map((str) => str.split(''));
    let visited = new Array(relatedArr.length).fill(false);
    let count = 0;
    for (let i = 0; i < relatedArr.length; i++) {
        if (!visited[i]) {
            dfs(relatedArr, visited, i);
            count++;
        }
    }
    return count;
}

function dfs(relatedArr, visited, i) {
    visited[i] = true;
    for (let j = 0; j < relatedArr.length; j++) {
        if (relatedArr[i][j] === '1' && !visited[j]) {
            dfs(relatedArr, visited, j);
        }
    }
}

console.log(countGroups(related));

// code accepted by hackerrank passed all test
