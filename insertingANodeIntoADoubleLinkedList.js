const DoublyLinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
        this.prev = null;
    }
};

const DoublyLinkedList = class {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertNode(nodeData) {
        let node = new DoublyLinkedListNode(nodeData);

        if (this.head == null) {
            this.head = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
        }

        this.tail = node;
    }
};

function printDoublyLinkedList(node, sep, ws) {
    while (node != null) {
        console.log(String(node.data));

        node = node.next;

        if (node != null) {
            console.log(sep);
        }
    }
}
function sortedInsert(llist, data) {
    // Write your code here
    let currentNode = llist
    let isBiggest = false
    while (currentNode.data < data && currentNode.next != null) {
        currentNode = currentNode.next

    }
    const newNode = new DoublyLinkedListNode(data);
    if (currentNode.data < data) {
        isBiggest = true
    }
    if (isBiggest) {
        newNode.prev = currentNode
        currentNode.next = newNode
    } else {
        newNode.next = currentNode
        newNode.prev = currentNode.prev
        if (newNode.prev) {
            newNode.prev.next = newNode
        }
        if (currentNode === llist) {
            llist = newNode
        }
    }

    return llist
}

let llist = new DoublyLinkedList();

[2, 3, 4].forEach((item) => {
    llist.insertNode(item);
})


let llist1 = sortedInsert(llist.head, 1);

printDoublyLinkedList(llist1, " ",)