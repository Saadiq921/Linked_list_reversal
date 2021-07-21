const reverseList = head => {
    //Begining of the Linked List
    let currentNode = head;
    let previousNode = null;
    let nextNode = null;
    //if currentNode is null, we are at the end of the list.
    while(currentNode !== null){
        //null becomes the heads next in its first iteration
        nextNode = currentNode.next;
        //Heads next node is now it's previous node
        currentNode.next = previousNode;
        //Previous pointer now moves to the position of current
        previousNode = currentNode;
        //Current moves up to the position of the nextNode
        currentNode = nextNode;
    }
    //The tail is now the former head 
    this.tail = this.head;
    //The head now points to the new head, former tail which lies in the previousNode
    this.head = previousNode;
    //Returns the new Head Node, the previousNode.
    return this.head;
}

