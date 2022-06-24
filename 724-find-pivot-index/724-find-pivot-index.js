/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {

    let allSum = 0
    
    for(let i = 0; i < nums.length; i++) {
        allSum += nums[i]
    }
    
    let leftSide = 0,
        rightSide = allSum,
        index = 0
    
    while(index <= nums.length) {
        
        rightSide -= nums[index]
        leftSide = allSum -rightSide - nums[index]  
        if(leftSide === rightSide) return index
        index++
    }
    
    return -1
};