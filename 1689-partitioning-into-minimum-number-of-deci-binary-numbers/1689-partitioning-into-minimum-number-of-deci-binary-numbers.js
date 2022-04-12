/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function(n) {
  //it will take at least x numbers to achieve an x
  //the largest character in any position in n will determine 
  //how many deci-binary numbers must be added together 
 return Math.max(...n.split(''))
};
