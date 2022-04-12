/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    
    if(nums.length <= 0) return 0
    if(target > nums[nums.length - 1]) return nums.length
    
    let left = 0
    let right = nums.length
    let mid;
    
    while(left <= right) {
         mid = Math.floor((left + right) / 2)
         const val = nums[mid]
        if(target < val){
            right = mid -1
        }
        else if(target > val) {
            left = mid +1
        }
        if (target === val) return mid
    }
  return target < nums[mid] ? mid : mid + 1;
};