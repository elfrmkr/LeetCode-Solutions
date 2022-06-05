/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    let distance = [],
        result = []
    
    for(let i = 0; i < points.length; i++) {
       distance.push(Math.pow(points[i][0] , 2) + Math.pow(points[i][1],2)) 
    }
        
    let index,min;
    for(let i = 0; i < k; i++) {
        min = Math.min(...distance)
        index = distance.indexOf(min)
        result.push(points[index])
        distance[index] = Infinity
    }
   return result
};