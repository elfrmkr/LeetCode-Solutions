/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    
    let map = {}
    
    for(let i = 0; i < nums.length; i++) {
        if(!map[nums[i]]) map[nums[i]] = 1
        else map[nums[i]] ++
    }
    
    let keys = Object.keys(map)
    
    for(let i = 0; i < keys.length; i++) {
        
       if(map[keys[i]] === 1) return keys[i]
    }
    
};