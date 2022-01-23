/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let max = candies[0]
    let greatest = []
    
   for (let i=1; i < candies.length; i++) {
        if (candies[i] > max) {
            max = candies[i];   // new maximum
        }
    }
    for (let i = 0; i < candies.length; i++) {
        if( (candies[i] + extraCandies) >= max ) {
            greatest.push(true)
        }
        else{
            greatest.push(false)
        }
    }
    return greatest
};