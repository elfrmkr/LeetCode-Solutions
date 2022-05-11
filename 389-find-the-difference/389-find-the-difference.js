/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    
    let arr = [...t]
    let sNew = [...s]

    for(let i = 0; i < sNew.length; i++) {
       if(arr.includes(sNew[i])) arr.splice(arr.indexOf(sNew[i]),1)   
    }
    
    return arr[0]
};