/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    
    let map = {}
    
    for(let i = 0; i < nums.length; i++) {
       
        if(!map[nums[i]]) map[nums[i]] = 1
        else map[nums[i]]++
    }
    
    return getMax(map)    
    
};

const getMax = object => {
  let max = Math.max(...Object.values(object))
  return Object.keys(object).filter(key => object[key]==max)
}