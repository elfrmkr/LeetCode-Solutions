/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function(head) {
    var pre  = head
    let arr = []
    arr.push(pre.val)    
    
    while(pre.next != null) {
        pre = pre.next
        arr.push(pre.val)    
    } 
    
    let n = arr.length
    let max = 0
    for(let i = 0; i < n/2 ; i++) {
        if(arr[i] + arr[n - i - 1] > max) {
            max = arr[i] + arr[n - i - 1]
        }
    }
    
    return max
};