import { ListNode } from '@src/common/list-node';

export function reverseList(head: Nullable<ListNode>): Nullable<ListNode> {
  let prev: Nullable<ListNode> = null;

  while (head !== null) {
    const nextNode = head.next;
    head.next = prev;
    prev = head;
    head = nextNode;
  }

  return prev;
}
