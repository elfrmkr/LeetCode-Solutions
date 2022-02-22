/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
   var count = []
    for(let i = 0; i < sentences.length; i++) {
      count.push(sentences[i].split(" ").length);    
    }
    
    return Math.max(...count);
};