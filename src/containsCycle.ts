// This question is asked by Microsoft. Given a linked list, containing unique numbers, return whether or not it has a cycle.
// Note: a cycle is a circular arrangement (i.e. one node points back to a previous node)

// Ex: Given the following linked lists...

// 1->2->3->1 -> true (3 points back to 1)
// 1->2->3 -> false
// 1->1 true (1 points to itself)

interface LLNode {
    value: number,
    next: LLNode | undefined,
}

const containsCycle = (node: LLNode): boolean => {
    const set = new Set<number>()

    while (node) {
        if (set.has(node.value)) {
            return true
        }

        set.add(node.value)
        node = node.next!
    }

    return false
}

const list = { value: 1, next: { value: 2, next: { value: 3, next: { value: 4, next: { value: 9, next: { value: 6, next: undefined } } } } } }
console.log(containsCycle(list))