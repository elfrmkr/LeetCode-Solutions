/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if(!head || !head.next) return head
    let first = head
    let second = head.next
    
    while(second) {
        if(first.val === second.val) first.next = second.next
        else first = second
        second = second.next
    }
    
    return head
};