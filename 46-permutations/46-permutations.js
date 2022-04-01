/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  let result = [], permutedArray = []  
  let currentNum, remainingNums, remainingNumsPermuted
  
  if(nums.length <= 1) return [nums] // base case
  
  for (let i = 0; i < nums.length; i++) {
     currentNum = nums[i];
    
     remainingNums = [...nums.slice(0, i), ...nums.slice(i + 1)] // everything except i
     remainingNumsPermuted = permute(remainingNums);

    for (let j = 0; j < remainingNumsPermuted.length; j++) {
      permutedArray = [currentNum, ...remainingNumsPermuted[j]]
      result.push(permutedArray);
    }
  }
  
  return result
    
};