/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let s = [...stones]
    let j = [...jewels]
    let count = 0
    
    for(let i = 0; i < s.length; i++) {
        for(let k = 0; k < j.length; k++) {
            
            if(s[i] === j[k]) count++
        }
    }
    
    return count 
};