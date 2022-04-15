/**
 * @param {number[]} nums
 * @return {number}
 */

var maxSubArray = function(nums) {
    return findMaxSumInArr(nums);
    
    function findMaxSumInArr(arr){
        // BASE CASES: 
        if (arr.length === 1){
            return arr[0];
        }
         if (arr.length === 0){
            return -Infinity;
        }
        let length = arr.length - 1;
        let mid = Math.floor( length/2 );
        
        let lMaxSumInSubArr = findMaxSumInArr( arr.slice(0, mid) );
        let rMaxSumInSubArr = findMaxSumInArr( arr.slice(mid + 1, length + 1) );
        
        let leftSum = 0,
            rightSum = 0;
        
     
        for (let i = mid - 1, currContiguousSum = 0; i >= 0; i--){
            currContiguousSum += arr[i];
            leftSum = Math.max(leftSum, currContiguousSum);
        }
       
        for (let i = mid + 1, currContiguousSum = 0; i <= length; i++){
            currContiguousSum += arr[i];
            rightSum = Math.max(rightSum, currContiguousSum);
        }
        
        return Math.max(
            leftSum + arr[mid] + rightSum, 
            lMaxSumInSubArr, 
            rMaxSumInSubArr  
        );
    }}
