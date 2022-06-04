/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) { 
    
    let mid = Math.floor(s.length / 2);
    let sub, multiple;
    
    for (let i = 1; i <= mid; i++) {
        
        sub = s.slice(0, i); 
        
        multiple = Math.floor(s.length / sub.length); // how many times it should repeat
        
        if (sub.repeat(multiple) === s) {
            return true;
        }
    }
    
    return false;
};