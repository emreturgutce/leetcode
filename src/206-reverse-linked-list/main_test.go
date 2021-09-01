package main

import "testing"

func TestReverseList(t *testing.T) {
	node5 := &ListNode{Val: 5}
	node4 := &ListNode{Val: 4, Next: node5}
	node3 := &ListNode{Val: 3, Next: node4}
	node2 := &ListNode{Val: 2, Next: node3}
	node1 := &ListNode{Val: 1, Next: node2}

	res := reverseList(node1)

	if res != node5 || res.Next != node4 || res.Next.Next != node3 || res.Next.Next.Next != node2 || res.Next.Next.Next.Next != node1 {
		t.Error()
	}
}
