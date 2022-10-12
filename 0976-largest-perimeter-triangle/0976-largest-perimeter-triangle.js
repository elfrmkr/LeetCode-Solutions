/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
    
   let sortedNums = nums.sort((a, b) => { return b - a})
   
   for(let i = 0; i < nums.length - 2; i++) {
       if(nums[i + 2] + nums[i + 1] > nums[i]) return nums[i + 2] + nums[i + 1] + nums[i]
   }

    return 0 
   
};