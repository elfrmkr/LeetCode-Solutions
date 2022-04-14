/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    
    for(let i = nums.length; i >= 0; i--) {
        if(nums[i] === 0) arraymove(nums, i, nums.length - 1) 
    }
    
};

function arraymove(arr, fromIndex, toIndex) {
    var element = arr[fromIndex];
    arr.splice(fromIndex, 1);
    arr.splice(toIndex, 0, element);
}

// 0 1 0 3 12
    

