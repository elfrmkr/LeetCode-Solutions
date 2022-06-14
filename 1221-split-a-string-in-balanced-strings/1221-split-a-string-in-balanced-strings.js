/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let lcount = 0, rcount = 0;
    let count = 0;
    
    s = [...s]
    s.forEach(val => {
        
        if(val === 'R') rcount++;
        else if(val==='L') lcount++;
        
        if(lcount === rcount) {
            
            count++;
            lcount = 0;
            rcount = 0;
        }
    });
    return count;
    
};