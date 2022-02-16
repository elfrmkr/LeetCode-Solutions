/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase() 
    s = s.replace(/[^a-zA-Z0-9]/g, '');
    s = s.replace(/\s+/g, '');
    
    
    if(s.length === 0 || s.length === 1) return true
    
    if(s.charAt(0) === s.charAt(s.length-1)) return isPalindrome(s.substring(1,s.length-1))

  return false
};
