// 025. reverse-nodes-in-k-group

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
    if (!head || !head.next) return head

    // using dummy cause we might get a new head
    let dummy = new ListNode()
    dummy.next = head

    let prevGroupTail = dummy
    while (true) {
        //find kth node of every group 
        // (not using kth node. just for returning out of loop)
        let kth = prevGroupTail
        for (let i = 0; i < k; i++) {
            kth = kth.next
            if (!kth) return dummy.next
        }

        //reverse for each group
        let currGroupHead = prevGroupTail.next

        let prev = null
        let curr = currGroupHead
        for (let i = 0; i < k; i++) {
            let next = curr.next
            curr.next = prev

            prev = curr //prev -> new head of curr grp
            curr = next //curr -> head of next group
        }

        //attach heads and tails
        prevGroupTail.next = prev;// link prev group to new head
        currGroupHead.next = curr;// link new tail to next group
        prevGroupTail = currGroupHead;// move forward
    }
};
