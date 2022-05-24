/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
   return matrix.flat().sort(function(a, b) { return a - b})[k - 1]  
};