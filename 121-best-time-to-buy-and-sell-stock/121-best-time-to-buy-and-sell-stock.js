/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
   
let min = prices[0]
let max = -Infinity

    for(let i = 0; i < prices.length; i++) {
        
      max = Math.max(max , prices[i] - min)
      min = Math.min(min , prices[i])
        
    }
    
    return max

}