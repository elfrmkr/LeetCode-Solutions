/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let count = 0
    s = s.replace(/\s+/g, ' ').trim()

    for(let i = s.length-1; i >= 0; i--) {
        
        if(s[i] !== " ") count++
        else return count
    }
    return count
};