/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    
    let w1 = [...word1],
        w2 = [...word2]
    let result = []
    
    for(let i = 0; i < w1.length; i++) {
        
        result.push(w1[i])
        result.push(w2[i])   
    }
    
     for(let i = w1.length; i < w2.length; i++) {
        result.push(w2[i])   
    }
    
    return result.join("")
};