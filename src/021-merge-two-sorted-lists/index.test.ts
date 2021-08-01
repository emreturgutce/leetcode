import { ListNode } from '@src/common/list-node';
import { mergeTwoLists } from './index';

describe('Merge Two Sorted Lists', function () {
  it('Merge Two Sorted Lists', function () {
    const l1 = new ListNode(1);
    l1.next = new ListNode(2);
    l1.next.next = new ListNode(4);
    const l2 = new ListNode(1);
    l2.next = new ListNode(3);
    l2.next.next = new ListNode(4);

    const res = mergeTwoLists(l1, l2);

    expect(res?.val).toEqual(1);
    expect(res?.next?.val).toEqual(1);
    expect(res?.next?.next?.val).toEqual(2);
    expect(res?.next?.next?.next?.val).toEqual(3);
    expect(res?.next?.next?.next?.next?.val).toEqual(4);
    expect(res?.next?.next?.next?.next?.next?.val).toEqual(4);
  });
});
