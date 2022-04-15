/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
 
/*
-- my initial solution from previous time

var reverseString = function(s) {
        
    for( let i = 0; i < s.length/2 ; i++) {
        // array
        let firsts = s[i]
        s[i] = s[s.length - 1 -i]
        s[s.length - 1 -i] = firsts
    }
    
};

*/ 


var reverseString = function(s) {
    
    reverse(s, 0, s.length -1)
};


var reverse = function(s, start, end) {
    
    while(start < end) {
        
        let temp = s[start]
        s[start] = s[end]
        s[end] = temp
        start++
        end--
    }
    
};