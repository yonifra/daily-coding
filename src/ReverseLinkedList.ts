// Reverse Linked List
// https://leetcode.com/problems/reverse-linked-list/description/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head: ListNode): ListNode {
    if (head === null || !head.next) {
        return head
    }

    let prev = null
    let current = head
    let next = current.next

    while(!!current) {
        current.next = prev
        prev = current
        current = next
        next = current?.next
    }

    return prev
};

// TIME: O(n)