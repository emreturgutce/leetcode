import { ListNode } from '@src/common/list-node';
import { reverseList } from './index';

describe('Reverse Linked List', function () {
  it('Should reverse linked list successfully', function () {
    const node5 = new ListNode(5);
    const node4 = new ListNode(4, node5);
    const node3 = new ListNode(3, node4);
    const node2 = new ListNode(2, node3);
    const node1 = new ListNode(1, node2);

    const reversedHead = reverseList(node1);

    expect(reversedHead?.val).toEqual(5);
    expect(reversedHead?.next?.val).toEqual(4);
    expect(reversedHead?.next?.next?.val).toEqual(3);
    expect(reversedHead?.next?.next?.next?.val).toEqual(2);
    expect(reversedHead?.next?.next?.next?.next?.val).toEqual(1);
  });
});
