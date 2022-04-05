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
var inorderTraversal = function(root) {
    // try depth first approach
    
    // (a) Inorder (Left, Root, Right) 
    // (b) Preorder (Root, Left, Right) 
    // (c) Postorder (Left, Right, Root) 
    
    // Left - root - right
 if(!root) return []   
    
    const left = inorderTraversal(root.left)
    const right = inorderTraversal(root.right)
    
    return [...left, root.val, ...right];
 
};
