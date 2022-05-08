/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
    
    let powerArray = [],
        soldierCount = 0
    
    for(let i = 0; i < mat.length; i++) {
        for(let j = 0; j < mat[i].length; j++) {
            if(mat[i][j] > 0) soldierCount++
        }
        powerArray.push(soldierCount)
        soldierCount = 0
    }
    let sortedIndexes = []

    for(let i = 0; i < powerArray.length; i++) {
        let index = powerArray.indexOf(Math.min(...powerArray))
        sortedIndexes.push(index)
        powerArray[index] = Infinity
    }
   return sortedIndexes.splice(0, k) 
    
};