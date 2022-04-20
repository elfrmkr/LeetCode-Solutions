/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let result = [...s]
    let hashMap = {} 
    
    // count the frequency of appearence in an array
    for(let i = 0; i < result.length; i++) {
        if(hashMap[result[i]])  hashMap[result[i]] += 1
        else hashMap[result[i]] = 1
    }
    // return the first key index that has a value 1,
    // if not return -1
    let keys = Object.keys(hashMap)
    
    for(let i = 0; i < keys.length; i++) {
      if(hashMap[keys[i]] === 1) return result.indexOf(keys[i])
    }
    return -1

};