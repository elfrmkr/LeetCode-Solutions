/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    // N = 2 * M
    let zeros = 0
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] !== 0 && arr.includes(arr[i]*2)) return true
        if(arr[i] === 0) zeros++
    }
    if(zeros > 1) return true
    return false
};