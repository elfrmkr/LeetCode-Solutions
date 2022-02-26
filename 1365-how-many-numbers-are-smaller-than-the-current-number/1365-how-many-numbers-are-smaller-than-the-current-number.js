/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    
    let count = 0
    let output = []
    for(let i = 0; i < nums.length; i++) {
        for(let j = 0; j < nums.length; j++) {
            if(j != i && nums[i] > nums[j]) {
                count++
            }
        }
       output.push(count)
       count = 0
    }
    
    return output
};