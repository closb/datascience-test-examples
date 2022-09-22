// Amazoan's AWS provides fast and effificient server solutions. The developers want to stress-test the quality of the server's channels. They must ensre the following;

// Each of the packets must be sent via a single channel.
// Each of the channels must transfer at least one packet

// The quality of the transger for a channel is defined by the mediar of the sizes of all the data packers sent through that channel. 

// Note: The median of an array is the middle element if the array is sorted in non-decreasing order. If the number of elements in the array is even, the median is the average of the two middle elements. 

// Find the maximum possible sum of the qualities of all channels. If the answer is a floating-point value round it to the next higher integer. 

// Example

// packets = [1,2,3,4,5]
// channels = 2

// At least one packet has to go through each of the 2 channels. One maximal solution is to transfer packets {1,2,3,4} throuch channel 1 and packet{5} through channel 2.

// Solution

/**
 * 
 * @param {Int} packets - packet sizes
 * @param {int} channels - number of channels
 * @returns {BigInt} - the maximum possible sum of the qualities of all channels
 */


function maximumQuality(packets, channels) {
    // sort the packets in descending order
    packets.sort((a,b) => b - a);
    // create a variable to hold the sum
    let sum = 0;
    // iterate through the packets
    for (let i = 0; i < packets.length; i++) {
        // add the median of the packets to the sum
        sum += packets[i];
        // increment i by the number of channels
        i += channels - 1;
    }
    // return the sum
    return sum;
}
console.log(maximumQuality([1,2,3,4,5], 2));