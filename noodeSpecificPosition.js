/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */

function insertNodeAtPosition(llist, data, position) {
    // Write your code here
    let index = 1
    let currentNode = llist
    while (index < position) {
        currentNode = currentNode.next
        index++
    }
    const tmpPreviousNextNode = currentNode.next
    currentNode.next = { data, next: tmpPreviousNextNode }
    return llist
}