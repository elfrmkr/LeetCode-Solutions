/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
    
    if(nums.length < 2) return 0
    
    nums = nums.sort(function(a , b) {
        return a - b
    })
    
    let max = 0
    for(let i = 0; i < nums.length; i++) {
        if(nums[i + 1] - nums[i] > max)
            max = nums[i + 1] - nums[i]
    }
    
    return max
};