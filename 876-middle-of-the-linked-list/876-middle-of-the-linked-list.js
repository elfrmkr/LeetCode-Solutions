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
var middleNode = function(head) {
    let count = 0
    let list = head
    while(list.next) {
        list = list.next
        count++
    }
    
    let length = count + 1
    
     let mid = Math.floor(length /2) 
     
     for(let i= 0; i < mid; i++) {
         head = head.next
     }
   return head 
};