/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function(arr1, arr2, d) {
    let count = 0
    let i = 0
    
    while(i < arr1.length) {
        
        for(let j = 0; j < arr2.length; j++) {
          if(Math.abs(arr1[i] - arr2[j]) > d) {
          if(j === arr2.length-1) count++
          } else break
        } 
        
        i++
    }
    
    return count 
}