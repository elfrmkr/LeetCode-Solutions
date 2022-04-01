/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let allSubsets = [[]], subs= []
    
    for(let num of nums){

      subs = []
        
        for(let entry of allSubsets){
          subs.push([...entry, num])
        }
        allSubsets.push(...subs)
    }
    
   return allSubsets
    
};
