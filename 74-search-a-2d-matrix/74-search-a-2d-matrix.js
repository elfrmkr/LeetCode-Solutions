/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    
    let array = matrix.flat()
    let start = 0,
        end = array.length - 1
    
    if(target > array[array.length - 1]) return false
    
    while(start <= end) {
        
        let mid = Math.floor((start + end) / 2)
        
        if(array[mid] === target) return true
        else if(array[mid] > target) end = mid - 1
        else start = mid + 1
    }
    
    return false
};