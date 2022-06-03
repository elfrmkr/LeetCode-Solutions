/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    
    let traverse = inorderTraversal(root)
    
    let sum = 0
    
    for(let i = 0; i <= traverse.length; i++) {        
        if(traverse[i] >= low && traverse[i] <= high) {
            sum += traverse[i]
        }    
    }
  return sum  
};


var inorderTraversal = function(root) {

 if(!root) return []   
    
    const left = inorderTraversal(root.left)
    const right = inorderTraversal(root.right)
    
    return [...left, root.val, ...right];
 
};
