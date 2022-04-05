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
 * @return {number[]}
 */

   // (a) Inorder (Left, Root, Right) 
   // (b) Preorder (Root, Left, Right) 
   // (c) Postorder (Left, Right, Root) 

var preorderTraversal = function(root) {
    
    if(!root) return []
    
    const left = preorderTraversal(root.left)
    const right = preorderTraversal(root.right)
    
    return [ root.val, ...left, ...right]
    
};