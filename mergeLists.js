class SinglyLinkedListNode {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }

}
function mergeLists(head1, head2) {

    let result = new SinglyLinkedListNode();
    let head1CurrentNode = head1;
    let head2CurrentNode = head2;
    let currentResultHelper = null;
    while(head1CurrentNode  || head2CurrentNode){
        if (!result.data){
            if (head1CurrentNode.data <= head2CurrentNode.data) {
                result.data = head1CurrentNode.data;
                head1CurrentNode = head1CurrentNode.next;
            } else if (head1CurrentNode.data > head2CurrentNode.data){
                result.data = head2CurrentNode.data;
                head2CurrentNode = head2CurrentNode.next;
            }
        }else if (!result.next){
            result.next = new SinglyLinkedListNode();
            currentResultHelper = result.next;
        }
        if (currentResultHelper && !currentResultHelper.data){
            if (!head1CurrentNode){
                currentResultHelper.data = head2CurrentNode.data;
                head2CurrentNode = head2CurrentNode.next;
            }
            else if (!head2CurrentNode){
                currentResultHelper.data = head1CurrentNode.data;
                head1CurrentNode = head1CurrentNode.next;
            }else if (head1CurrentNode.data <= head2CurrentNode.data) {
                currentResultHelper.data = head1CurrentNode.data;
                head1CurrentNode = head1CurrentNode.next;
            } else if (head1CurrentNode.data > head2CurrentNode.data){
                currentResultHelper.data = head2CurrentNode.data;
                head2CurrentNode = head2CurrentNode.next;
            }
            if (head1CurrentNode || head2CurrentNode){
                currentResultHelper.next = new SinglyLinkedListNode();
                currentResultHelper = currentResultHelper.next;
            }
        }
    }
    return result;
}
module.exports = {mergeLists, SinglyLinkedListNode}