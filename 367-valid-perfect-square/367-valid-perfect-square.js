/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    
   let low = 1, high = num;
   let mid;
    
        while (low <= high) {
        
            mid = Math.floor((low + high)/2)
            
            if (mid * mid == num) {
                return true;
            } else if (mid * mid < num) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        return false;    
};