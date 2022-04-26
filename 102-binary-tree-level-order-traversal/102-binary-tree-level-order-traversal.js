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
 * @return {number[][]}
 */
var levelOrder = function(root) {
  
   let result = []
    
    if(!root) return []
 
     const search = (root, level) => {
        
        if (!root) return;
        
        if (!result[level]) result[level] = [root.val];
         else  result[level].push(root.val);

        search(root.left, level+1);
        search(root.right, level+1);
    }
    search(root, 0)
    
    return result;  
    
};