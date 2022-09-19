// There are n varilables and m requirments. Requirments are represented as ( x <= y). Meaning that the xth variable must be less than or equal to the yth variable. 

// Your task is to assign non-negative numbers smaller than 10 to each variable and then calculate the number of different assinments satisfying all requirments. Two assinments are different if and only if at least one variable is assinged to a different number in both assingmenrs. Print your answer module 10^3+7.

// Input Format

// The first line contines 2 space-seperated integers, n and m, respectively. Each of the m susequent lines contains 2 space-seperated integers describing the respective x and y values for an (x <= y) requirements.

// Constraints

// 0 < n < 14
// 0 < m < 200
// 0 <= x,y < n

// Output Format

// Print the number of different assinments satisfying all requirments modulo 10^3+7.

// Sample Input 0

// 6 7
// 1 3
// 0 1
// 2 4
// 0 4
// 2 5
// 3 4
// 0 2

// Sample Output 0

// 1000

// Explanation 0

// There are 6 variables and 7 requirments. 
// Let the variables be in the array a[6].
// Requirements are
// a[1] <= a[3],a[0] <= a[1],a[2] <= a[4],a[0] <= a[4],a[2] <= a[5],a[3] <= a[4],a[0] <= a[2]
// one of the assinments is - {1,2,3,4,5,6}
// similarly there are 25168 assignments possible
// result = 25168 modulo 1007 = 1000

function requirement(n, req){
    
}