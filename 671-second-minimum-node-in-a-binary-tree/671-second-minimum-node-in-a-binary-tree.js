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
var findSecondMinimumValue = function(root) {
    
   let arr =  preorder(root),
       min = Math.min(...arr)
   arr = arr.filter(i => i != min).sort(function(a,b) { return a - b})
 
return arr[0] ? arr[0] : -1
    
};


var preorder = function(root) {
    
    if(!root) return []
    
    const left = preorder(root.left)
    const right = preorder(root.right)
    
    return [...left, root.val, ...right]
}