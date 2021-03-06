/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    
    const result = [];
    
    function traverse(tree) {
        if (!tree) {
            return [];
        }
        result.push(tree.val);
        for(let i = 0; i < tree.children.length; i++) {
            traverse(tree.children[i]);
        }
        return result;
    }
    
    return traverse(root)
};