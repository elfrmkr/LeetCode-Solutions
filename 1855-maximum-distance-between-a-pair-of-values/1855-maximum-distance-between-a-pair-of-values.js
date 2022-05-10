/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxDistance = function(nums1, nums2) {
    let i = 0, j = 0;
    
    let dist = 0;
    while (i < nums1.length && j < nums2.length) {
        // maintain the i <= j invariant
        j = Math.max(j, i);
        
        while (nums1[i] <= nums2[j]) {
            dist = Math.max(dist , j - i);
            j++;
        }
      i++;
    }   
    return dist;
};