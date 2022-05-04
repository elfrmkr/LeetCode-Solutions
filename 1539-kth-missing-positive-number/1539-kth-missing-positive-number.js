/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
     let check = 0;
     let first = 1
     let a = []
     while(a.length < k){
         if(arr[check] === first){
             first++;
             check++;
         }
         else{
             a.push(first)
             first++
         }
     }
     return a[a.length-1]
};