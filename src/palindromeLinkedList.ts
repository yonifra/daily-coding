// Source: https://leetcode.com/problems/palindrome-linked-list/
// Given a singly linked list, determine if it is a palindrome.
// Example 1:
// Input: 1->2
// Output: false
// Example 2:
// Input: 1->2->2->1
// Output: true

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

interface ListNode {
    val: number
    next: ListNode | null
}

function isPalindrome(head: ListNode | null): boolean {
    const arr: number[] = []
    let curr = head

    while (curr) {
        arr.push(curr.val)
        curr = curr.next
    }

    // here we should have all values in arr, so check the palindrome as a regular palindrome

    let L = 0
    let R = arr.length - 1

    while (L < R) {
        if (arr[L] !== arr[R]) {
            return false
        }
        L++
        R--
    }

    return true
}

// Time complexity: O(N)
console.log(
    isPalindrome({
        val: 1,
        next: {
            val: 2,
            next: {
                val: 2,
                next: {
                    val: 1,
                    next: null,
                },
            },
        },
    }),
) // true
