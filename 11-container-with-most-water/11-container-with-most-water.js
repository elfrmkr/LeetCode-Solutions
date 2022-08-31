/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let start = 0,
        end = height.length - 1
    
    let max = 0
    
    for(let i = 0; i < height.length; i++) {
        
        if(height[start] >= height[end]) {
           if(max < (end-start) * height[end]) max = (end-start) * height[end]
        } 
        else {
        if(max < (end-start) * height[start])  max = (end-start) * height[start]
        }
        
	    if(height[start] < height[end]) start++;
		else end--;  
    }
    
    return max
};