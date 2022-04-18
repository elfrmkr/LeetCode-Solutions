/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */

var matrixReshape = function(nums, r, c) {
    if (nums[0].length * nums.length !== r * c) return nums;
      let arr = nums.flat(), // changes 2d array into 1d
      a = [];
  
    for (let i = 0; i < r; i++) { // for each row add numbers to col
       a.push(arr.splice(0, c));
    }
    return a
};
