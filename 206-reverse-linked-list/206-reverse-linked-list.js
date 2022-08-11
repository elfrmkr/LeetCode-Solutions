var reverseList = function(head) {
     if (!head || !head.next) {
        return head;
      }
      let first = head;
      let second = first.next;
  
      while(second) {
        const temp = second.next;
        second.next = first;
        first = second;
        second = temp;
      }
  
      head.next = null;
      head = first;
    return head
}