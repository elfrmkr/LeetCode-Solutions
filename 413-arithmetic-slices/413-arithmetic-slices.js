/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function(nums) {
    
      let n = nums.length;
        
      if( n < 3 ) return 0; // Base case

        let slices = 0;

        // Both ends of sliding window.
        let left = 0 , right = 1;

        // current common difference
        let currDiff = nums[right] - nums[left];

        // starting from index 2
        right++;
    
        while(right < n) {
     
            if( nums[right] - nums[right - 1] == currDiff ) {
                right++;
            }
            else {    
            let windowSize = right - left;
               if( windowSize >= 3 ) {
                    slices += ((windowSize - 2) * (windowSize - 1)) / 2; // the math of subarrays
                }
                
                left = right - 1;
                currDiff = nums[right] - nums[left];
                right++;
            }
        }

        // case when window extends till the last element
        let windowSize = right - left;
        if(windowSize >= 3) {
            slices += ( (windowSize-2) * (windowSize-1) )/2;
        }
      return slices;
}
