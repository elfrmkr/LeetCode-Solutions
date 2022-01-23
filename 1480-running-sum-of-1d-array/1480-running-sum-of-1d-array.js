/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let sum = []
    let add = 0
    for (let i=0; i < nums.length; i++) {
        add += nums[i]
        sum.push(add)
    }
    return sum
};