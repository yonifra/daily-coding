// Remove n-th node from end of list
// https://leetcode.com/problems/remove-nth-node-from-end-of-list/

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    if (!head) {
        return head;
    }

    if (!head.next) {
        if (n === 1) {
            return null;
        } else {
            return head;
        }
    }

    if (n === 0) {
        head = head.next;
        return head;
    }

    const allNodes = []
    let runner = head;

    while (runner) {
        allNodes.push(runner)
        runner = runner.next
    }

    if (n === allNodes.length) {
        return head.next;
    }

    const node = allNodes[allNodes.length - 1 - n]

    if (!node.next.next) {
        node.next = null;
    } else {
        node.next = node.next.next
    }
    return head;
};