/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    let shuffle = [...s]
    for(let i = 0; i < s.length; i++) {
        shuffle[indices[i]] = s.charAt(i)
    }
    return shuffle.join("")
};