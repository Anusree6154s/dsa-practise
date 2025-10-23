// 237. delete-node-in-a-linked-list

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node 
in-place instead.
 */
var deleteNode = function (node) {
    node.val = node.next.val

    // dont have access to prev node.
    // so we copy next val to curr val and 
    // then delete next node
    node.next = node.next.next
};
