/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {

    let map = {}  
    var startOfWindow = 0,
        longestStringLength = 0;

    for (let i = 0; i < s.length; i++) {
        
    let currentCharacterPositionInMap = map[s[i]] 
        // shifting the left index of our window to the found index value + 1  
        // there can be a longer substring than previosly calculated   
       if (currentCharacterPositionInMap >= startOfWindow) {
            startOfWindow = currentCharacterPositionInMap + 1;
        }
		    map[s[i]] = i // to get the position of keys, set keys to their position
	      //currentwindow length, if it is greater than  current max sum update the max sum
        longestStringLength = Math.max((i-startOfWindow) + 1, longestStringLength)
    }
    return longestStringLength
}
