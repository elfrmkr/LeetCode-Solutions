/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    
if(!head) return []  

    let length = 0
    let nodes = head
    while(nodes.next) {
         nodes = nodes.next
         length++
    }
        
// unwanted node length - n +1
/*
lead = (length -n)
unwanted = length -n +1

lead.next = unwanted.next if exist otherwise null
*/    
let count = 0
length = length + 1

// 1 2 , length 2     
if(length === n) {
 head = head.next
 return head    
 }
let lead = head
while(count < length - n - 1) {
    lead = lead.next
    count++
}
 if(lead && lead.next) lead.next = lead.next.next
 else {
    if(lead) lead.next = null     
 } 
 if(length === 1)  head = null


return head
};


