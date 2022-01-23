/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
let count = 0
let i = 0;

while(i < nums.length){
  for(let j = i + 1; j< nums.length; j++){
    if(nums[i] === nums[j]){
     count++
    }
  }
    i++;
  }
  
  return count
};
