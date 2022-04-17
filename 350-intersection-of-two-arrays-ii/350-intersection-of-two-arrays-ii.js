/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let result = []
    let hashMap = {} 
    
    // count the frequency of appearence in an array
    for(let i = 0; i < nums1.length; i++) {
        if(hashMap[nums1[i]])  hashMap[nums1[i]] += 1
        else hashMap[nums1[i]] = 1
    }
    ///check the appearence of the array items in the object
    for(let i = 0; i < nums2.length; i++) {
     if(hashMap[nums2[i]]) 
     {
        result.push(nums2[i])
        hashMap[nums2[i]] -= 1
     }  
     if(hashMap[nums2[i]] === 0)   delete hashMap[nums2[i]] 
    }
    
    return result
       
};