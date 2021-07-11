import { ListNode } from '@common/list-node';

export function hasCycle(head: Nullable<ListNode>): boolean {
  if (head === null) {
    return false;
  }

  let slow: Nullable<ListNode> = head;
  let fast = head.next;

  while (slow !== fast) {
    if (fast === null || fast.next === null) {
      return false;
    }

    slow = (slow as ListNode).next;
    fast = fast.next.next;
  }

  return true;
}
