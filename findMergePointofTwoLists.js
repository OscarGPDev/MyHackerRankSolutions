function findMergeNode(headA, headB) {
    let currentNodeA = headA
    let currentNodeB = headB
    while (currentNodeA.next) {
        while (currentNodeB.next) {
            if (currentNodeA === currentNodeB) {
                return currentNodeA.data
            }
            currentNodeB = currentNodeB.next
        }
        currentNodeA = currentNodeA.next
        currentNodeB = headB
    }
    return currentNodeA.data

}