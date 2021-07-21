const reverseList = head => {
    //Begining of the Singly Linked List
    let currentNode = head;
    //Two pointers to recieve the for the 
    let previousNode = null;
    let nextNode = null;
    //if currentNode is null, we stand at the end of the list.
    while(currentNode !== null){
        //null becomes the heads next in its first iteration
        nextNode = currentNode.next;
        //Pointers are exchanged to face the opposite way
        currentNode.next = previousNode;
        //Previous pointer now move to the position of current
        previousNode = currentNode;
        //Current moves up to the position of the nextNode
        currentNode = nextNode;
    }
    //The tail is now the former head 
    this.tail = this.head;
    //The head now point to the previous head which lies in the previousNode
    this.head = previousNode;
    //Returns the new Head Node, the previous tail.
    return previousNode;
}

