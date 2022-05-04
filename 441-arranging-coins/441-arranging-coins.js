/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
   
    let layer = 0,
        constant = 0
    
    while(n >= 0) {
        layer++
        constant++
        n = n - constant
    }
    
    if(layer > n) return layer -1
    else return layer
};