/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    
    if(!nums.includes(target)) return [-1,-1]
    
    let start = 0, end = nums.length -1, mid
    
    while(start <= end) {
        
        mid = Math.floor((start + end) / 2) 
        // return function is wrong, there may be more than two elements of target
        if(nums[mid] === target) {
         let i = 0
         let j = 0
          while(nums[mid + i] === target) { i++ }
          while(nums[mid - j] === target) { j++ }
            
            return [mid -j + 1, mid + i - 1]
        }
        else if(nums[mid] > target) end = mid - 1
        else start = mid + 1
    }
    return [end - 1, end]
};