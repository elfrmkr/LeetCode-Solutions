/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function(nums) {
    
    nums = nums.sort(function(a,b) { return a - b }) 
    
    let start = 0,
        end = nums.length - 1 
    
    let sum = []
    while(start <= end) {
        sum.push(nums[start] + nums[end])
        start++
        end--
    }
    
return Math.max(...sum)
};