/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let stringArray = [...s]
    let start = 0

    while(start < stringArray.length -1) {
        let stopIndex = getEmpthySpace(stringArray, start)
        reverse(stringArray, start, stopIndex - 1)
        start = stopIndex + 1
    }
   return stringArray.join('') 
}


var reverse = function(s, start, end) {
    
    while(start < end) {
        
        let temp = s[start] 
        s[start] = s[end]
        s[end] = temp
        start++
        end--
    }
};


var getEmpthySpace = function (arr, start) {
  while (arr[start] !== ' ' && start < arr.length) {
    start++;
  }
  return start;
};
