/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToMakeFair = function(nums) {
    
    let evenSum = 0
    let oddSum = 0
    // check even indexes
    for(let i = 0; i < nums.length; i = i+2)
    {
        evenSum += nums[i]
    }
    
    for(let i = 1; i < nums.length; i = i+2)
    {
        oddSum += nums[i]
    }
    let count = 0
    
 for (let i = 0; i < nums.length; i++) {
        if (i % 2 === 0) {
            evenSum -= nums[i];
            if (evenSum === oddSum) {
                count++; 
            }
            oddSum += nums[i];
        } else {
            oddSum -= nums[i];
            if (evenSum === oddSum) {
                count++;
            }
            evenSum += nums[i]
        }
    }
    
    return count;
}