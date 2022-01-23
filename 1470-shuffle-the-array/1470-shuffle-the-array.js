/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {

const firstHalf = nums.splice(0, n);   
const secondHalf = nums.splice(-n);
let newForm = []

    for(let i = 0; i < firstHalf.length; i++ ) {
        newForm.push(firstHalf[i])
        newForm.push(secondHalf[i])
    }
    return newForm

};