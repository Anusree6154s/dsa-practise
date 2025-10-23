// 000. insert-into-a-sorted-circular-linked-list-leetcode

class ListNode {
  constructor(val) {
    this.val = val ? val : 0;
    this.next = null;
  }
}
const insertVal = (head, insertVal) => {
  //4 cases to take care:
  // when no head,
  // when between curr and curr.next,
  // when at the joinging of tail and head
  // when all vals are equal

  // when no head
  if (!head) {
    const node = new ListNode(insertVal);
    node.next = node;
    return node;
  }

  let curr = head;
  while (true) {
    // when between curr and curr.next
    if (curr.val <= insertVal && curr.next.val >= insertVal) {
      break;
    }

    // when at joining (pivot)
    if (
      curr.val > curr.next.val &&
      (curr.val <= insertVal || insertVal <= curr.next.val)
    ) {
      break;
    }

    curr = curr.next;

    // when all vals are equal and we did full loop
    if (curr === head) break;
  }

  //   insert after curr
  let node = new ListNode(insertVal);
  node.next = curr.next;
  curr.next = node;

  return head;
};

// at one time only one test case can be tested as each tiem the list gets mutated
const node1 = new ListNode(1);
const node2 = new ListNode(3);
const node3 = new ListNode(5);
node1.next = node2;
node2.next = node3;
node3.next = node1;

const res1 = insertVal(node1, 4);
const res2 = insertVal(null, 6);
const res3 = insertVal(node1, 6);
console.log(res1, res2, res3);
