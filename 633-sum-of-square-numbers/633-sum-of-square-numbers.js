/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    
     for (let i = 0; i <= Math.sqrt(c); i++) {
       if (Math.floor(Math.sqrt(c-i*i)) == Math.sqrt(c-i*i)) return true;
     } 
  return false;
};