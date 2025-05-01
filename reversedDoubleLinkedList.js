
function reverse(llist) {
    // Write your code here
    let currentNode = llist

    while (currentNode.next) {
        const originalNextNode = currentNode.next
        currentNode.next = currentNode.prev
        currentNode.prev = originalNextNode
        currentNode = originalNextNode
    }
    const originalNextNode = currentNode.next
    currentNode.next = currentNode.prev
    currentNode.prev = originalNextNode
    return currentNode
}