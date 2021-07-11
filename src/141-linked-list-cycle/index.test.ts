import { ListNode } from '@src/common/list-node';
import { hasCycle } from './index';

describe('Linked List Cycle', function () {
  it('Should detect the cycle', function () {
    const node4 = new ListNode(-4);
    const node3 = new ListNode(0, node4);
    const node2 = new ListNode(2, node3);
    const node1 = new ListNode(3, node2);

    node4.next = node2;

    const cycle = hasCycle(node1);

    expect(cycle).toEqual(true);
  });

  it('No cycle', function () {
    const node3 = new ListNode(3);
    const node2 = new ListNode(2, node3);
    const node1 = new ListNode(1, node2);

    const cycle = hasCycle(node1);

    expect(cycle).toEqual(false);
  });
});
