/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    
    if(n === 1) return 1
    else if(n === 2) return 2
    
    let arr = [ 1 , 2]
    for(let i = 0; i < n - 1; i++) {
        arr.push(arr[i] + arr[i+1])    
    }
    
    return arr[n - 1]
};