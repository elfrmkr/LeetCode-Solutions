/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
        
    let squaresArray = []
    
    for(let i = 0; i < nums.length; i++) {
        squaresArray.push(Math.pow(nums[i],2))
    }
    
   squaresArray.sort(function(a, b) {
        return a - b;
    });
    
    return squaresArray
};