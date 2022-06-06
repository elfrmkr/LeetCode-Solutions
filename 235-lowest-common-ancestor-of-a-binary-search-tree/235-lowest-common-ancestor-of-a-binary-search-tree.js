/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    p = p.val
    q = q.val
    // search is based on the values p and q
 while(root) {
    
    if(root.val < p && root.val < q) { // right side of the binary tree
        root = root.right
    } else if(root.val > p && root.val > q) { // left side of the binary tree
        root = root.left     
    } else break
 } 
    
return root
};