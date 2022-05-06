/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    
    let array = grid.flat()
    let negativeCount = 0
    
    for(let i = 0; i < array.length; i++) {
        if(array[i] < 0) negativeCount++
    }
    
  return negativeCount  
};