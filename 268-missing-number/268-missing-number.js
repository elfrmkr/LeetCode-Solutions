/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    
    let sum = 0
    let expectedSum = nums.length * (nums.length + 1) /2
    for(let i = 0; i < nums.length; i++) {
        sum = sum + nums[i]
    }
    
    return expectedSum - sum
};