function mergeLists(head1, head2) {
    // create a new list
    let newList = new SinglyLinkedList();
    // create a pointer to the head of the new list
    let current = newList;
    // while both lists have nodes
    while (head1 && head2) {
        // if the value of the head of list A is less than the value of the head of list B
        if (head1.data < head2.data) {
            // set the next node of the new list to the head of list A
            current.next = head1;
            // set the head of list A to the next node
            head1 = head1.next;
        } else {
            // set the next node of the new list to the head of list B
            current.next = head2;
            // set the head of list B to the next node
            head2 = head2.next;
        }
        // set the current node to the next node
        current = current.next;
    }
    // if list A has nodes left
    if (head1) {
        // set the next node of the new list to the head of list A
        current.next = head1;
    } else {
        // set the next node of the new list to the head of list B
        current.next = head2;
    }
    // return the head of the new list
    return newList.next;
}
