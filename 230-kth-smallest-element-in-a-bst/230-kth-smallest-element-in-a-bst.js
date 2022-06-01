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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    
    // (a) Inorder (Left, Root, Right) 
   var inorderTraversal = function(root) {

        if(!root) return []   

        const left = inorderTraversal(root.left)
        const right = inorderTraversal(root.right)

        return [...left, root.val, ...right]; 
    }
   
   return inorderTraversal(root)[k - 1]

};

