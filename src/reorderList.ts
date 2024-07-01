// Reorder Linked List - Medium
// https://leetcode.com/problems/reorder-list

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

/**
 Do not return anything, modify head in-place instead.
 */
 function reorderList(head: ListNode | null): void {
    if (!head){
        return;
    }

    const originalHead = head;
    let all = []

    while (head) {
        all.push(head)
        head = head.next;
    }

    let left = 1;
    let right = all.length - 1;
    let current = originalHead;

    while (left <= right) {
        current.next = all[right];
        current = current.next
        current.next = all[left]
        current = current.next
        left++;
        right--;
    }

    current.next = null
};

// Time complexity: O(n)