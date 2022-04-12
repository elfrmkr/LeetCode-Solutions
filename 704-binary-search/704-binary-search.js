/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    
    if(nums.length <= 0) return -1
     let left = 0;
     let right = nums.length - 1;

 
 while (left <= right) {
    let mid = Math.floor((left + right) / 2); // divide the search area in every iteration
    let middle = nums[mid] // find the middle 

    if (middle < target) { 
      left = mid + 1; 
    } else if(middle > target) {
        right = mid - 1;
    } else return mid;
  }
  return -1; // if it is not there
};
