// log file is provided as a string array where each entry
// represents a transaction to service. Each transaction consist of:

// sender_user_id - unique indentifier for the user that initiated the transaction it consists of only digits with at most 9 integers

// recipient_user_id - unique indentifier for the user that is receiving the trans it consists of only digits with at most 9 digits

// amount_of_transaction - the amount of the transaction. it consies of only digits with at most 9 digits

// the values are separated by a space. For example "sender_user_id recipient_user_id amount_of_transaction"

// Users that perform an excessive amount of transactions might be abusing the service so you have tasks to identify the users that have a number of transactions over a threshold. The list of user ids should be ordereed in ascending number valuer.

// Example

// logs = ["88 99 200", "88 99 300", "99 32 100", "12 12 15"]
// threshold = 2

// The transaction count for each user, regardless of the transaction type, is as follows:

// 99 - 3
// 88 - 2
// 12 - 1
// 32 - 1

// There are two users with at least threshold = 2 transactions. The user ids are 99 and 88. The user ids are ordered in ascending order. The function returns [88, 99].

// Note - In the last log entry, user 12, was on both sides of the transaction. This counts as only 1 transaction for user 12.

// Function Description

// The function has the following parameters:

// string logs[n] - each logs[i] denotes the ith entry in the logs.
// int threshold - the minimum number of the transactions that a user must have to be included in the result.

// returns
// string[] - an array of user ids as strings sorted ascending by numeric value

// Constraints

// 1 <= n <= 10^5
// 1 <= threshold <= n
// The sender_user_id and recipient_user_id and amount_of_transaction contain only characters in the range of ascii['0' - '9']
// the sender_user_id, recipient_user_id and amount_of_transaction start with a non-zero digit
// 0 < length of sender_user_id, recipient_user_id, amount_of_transaction <= 9
// The result will contain at least one element.

// Input Format for Custom Testing

// The first line contains the integer n the size of the logs
// The following n lines contain a string logs[i]
// The last line contains n integer threshold

// Sample Case 0
// 4  -> logs[] size n = 4
// 2 50 -> logs = ["1 2 50", "1 7 70", "1 3 20", "2 2 17"]
// 7 70
// 1 3 20
// 2 2 17
// 2 -> threshold = 2

// sample output
// 1
// 2

// Explanation

// 1 - 3 transactions
// 2 - 2 transactions
// 7 - 1 transaction
// 3 - 1 transaction

// only users 1 and 2 have at least threshold = 2 transactions, The retutn array in numerically ascending order is ["1", "2"]. Note that in the last log entry, the user with id 2 performed both roles in the transaction. This is counted as one transaction for the user.

// Sample Case 1

// 4  -> logs[] size n = 4
// 9 7 50 -> logs = ["9 7 50" "22 7 20", "33 7 50" "22 7 30"]
// 22 7 20
// 33 7 50
// 22 7 30
// 3 -> threshold = 3

// sample output
// 7

// Explanation

// 9 - 1 transaction
// 7 - 1 transaction
// 22 - 2 transactions
// 33 - 1 transaction

/**
 * 
 * @param {*} logs - array of strings
 * @param {*} threshold - integer
 * @returns array of strings 
 */

function processLogs(logs, threshold) {
  // create a map to store the user ids and the number of transactions
  let map = new Map();
    // iterate over the logs
    for (let i = 0; i < logs.length; i++) {
        // split the log entry into an array
        let log = logs[i].split(' ');
        // get the sender and recipient ids
        let sender = log[0];
        let recipient = log[1];
        // if the sender is not in the map, add it
        if (!map.has(sender)) {
            map.set(sender, 1);
        } else {
            // if the sender is in the map, increment the number of transactions
            map.set(sender, map.get(sender) + 1);
        }
        // if the recipient is not in the map, add it
        if (!map.has(recipient)) {
            map.set(recipient, 1);
        } else {
            // if the recipient is in the map, increment the number of transactions
            map.set(recipient, map.get(recipient) + 1);
        }
    }
    // create an array to store the user ids that have at least threshold transactions
    let result = [];
    // iterate over the map
    for (let [key, value] of map) {
        // if the number of transactions is greater than or equal to the threshold, add the user id to the result array
        if (value >= threshold) {
            result.push(key);
        }
    }
    // sort the result array in ascending order
    result.sort((a, b) => a - b);
    // return the result array
    return result;
}

console.log(processLogs(["9 7 50" , "22 7 20", "33 7 50" ,"22 7 30"], 2));