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
 * @return {number}
 */
var sumEvenGrandparent = function(root) {
    
  let sum = 0;
    
    const traverse = (root) => {
        if (!root) return;
    
        if (root.left && (root.left.left || root.left.right)) {
            if (root.val % 2 === 0) {
                if (root.left.left) {
                    sum += root.left.left.val;                    
                }
                if (root.left.right) {
                    sum += root.left.right.val;
                }
            }
        } 
        
        if (root.right && (root.right.left || root.right.right)) {
            if (root.val % 2 === 0) {
                if (root.right.left) {
                    sum += root.right.left.val;                    
                }
                if (root.right.right) {
                    sum += root.right.right.val;
                }
            }
        }

        traverse(root.left);
        traverse(root.right);
    }
    
    traverse(root);
    return sum;
};