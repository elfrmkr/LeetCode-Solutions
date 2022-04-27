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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    
     var search = function(root){
         if(root) {
             if(root.val === val) return root
             else if(root.val < val) return search(root.right)
             return search(root.left)
         } 
     } 
     
     if(typeof search(root) === 'undefined') return null
     else  return search(root)
};