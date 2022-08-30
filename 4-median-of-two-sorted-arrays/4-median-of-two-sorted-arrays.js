/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let merged = [...nums1, ...nums2].sort(function (a, b) {
        return a - b
    })
    
    let length = merged.length -1
    if(length%2 === 0) {
        return merged[(length) / 2]
    } else {
        let mid = (merged[Math.round((length) / 2 -1)]
        +  merged[Math.round((length) / 2)]) / 2
        return mid
    }
};