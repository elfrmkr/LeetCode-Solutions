/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    
    let map = {}
    
    for(let i = 0; i < nums.length; i++) {
        if(!map[nums[i]]) map[nums[i]] = 1
        else map[nums[i]]++
    }
    
    let sortable = [];
    for (var m in map) {
        sortable.push([m, map[m]]);
    }

    sortable.sort(function(a, b) {
        return b[1] - a[1]; // descending order
    });
    
    let output = []
    
    for(let i = 0; i < k * 2 ; i = i+2) {
        output.push(sortable.flat()[i])   
    }
    
    return output
};