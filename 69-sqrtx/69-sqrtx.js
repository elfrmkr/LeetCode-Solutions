/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let start = 0, end = x
    let mid
    while(start <= end) {
        mid = Math.floor((start + end) / 2)
        
        if(mid * mid === x) return mid
        
        else if(mid * mid > x) end = mid - 1
        else start = mid + 1
    }
    return end
};