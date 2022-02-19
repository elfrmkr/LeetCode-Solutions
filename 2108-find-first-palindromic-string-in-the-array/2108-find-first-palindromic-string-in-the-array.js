/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    
    for(let i = 0; i < words.length; i++) {
                
       if(checkPalidrome(words[i]) === true) return words[i]
    
   }
     return ""
    
};

var checkPalidrome = (s) => {
  if(s.length === 0 || s.length === 1) return true
    
    if(s.charAt(0) === s.charAt(s.length-1)) return checkPalidrome(s.substring(1,s.length-1))

  return false
}