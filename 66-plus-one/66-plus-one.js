/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    
for(var i = digits.length - 1; i >= 0; i--){
    
    digits[i]++; 
    
    if(digits[i] > 9) {
        digits[i] = 0;
    } else {
        return digits;
    }
}
    digits.unshift(1); // adding one in the beginning of the array
     
    return digits
    
};