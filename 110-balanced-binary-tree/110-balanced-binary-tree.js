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
 * @return {boolean}
 */


var isBalanced = function(root) {
    
    if(!root) return true;
    
    let left = depth(root.left);
    let right = depth(root.right);
    return (Math.abs(left - right) < 2)
    && isBalanced(root.left) && isBalanced(root.right);
}
var depth = function(root){
        if(!root) return 0;
    
    return 1 + Math.max(depth(root.left), depth(root.right));
   }