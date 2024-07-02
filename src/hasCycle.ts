// Linked List Cycle - Easy
// Source: https://leetcode.com/problems/linked-list-cycle/
// Runtime 59ms Beats 94.99% Memory 53.29MB Beats 89.38%


function hasCycle(head: ListNode | null): boolean {
    if (!head) {
        return false;
    }

    let slow = head;
    let fast = head.next;

    while (fast) {
        if (fast === slow) {
            return true;
        }

        slow = slow.next;
        fast = fast.next?.next
    }

    return false;
};