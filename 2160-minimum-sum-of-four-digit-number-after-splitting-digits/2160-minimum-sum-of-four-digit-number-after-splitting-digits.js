/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
    num = Array.from(String(num), Number);
    // 0 2 4 8 
    //
    num.sort()
    if((num[0] && num[1]) != 0 ) {
        return (num[0] * 10 + num[2]) + (num[1] * 10 + num[3])
    } else if( num[0] == 0 && num[1] !== 0) {
       return num[1] * 10 + num[2] + num[3] 
    }
    else {
        return num[2] + num[3]
    } 
    
};