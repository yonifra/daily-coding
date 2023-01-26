// This question is asked by Google. Given a linked list and a value, remove all nodes containing the provided value, and return the resulting list.

// Ex: Given the following linked lists and values...

// 1->2->3->null, value = 3, return 1->2->null
// 8->1->1->4->12->null, value = 1, return 8->4->12->null
// 7->12->2->9->null, value = 7, return 12->2->9->null

interface LLNode {
    value: number,
    next: LLNode | undefined,
}

const printList = (head: LLNode | undefined) => {
    const result: number[] = []
    while (head) {
        result.push(head.value)
        head = head.next
    }
    console.log(result.join(' -> '))
}

const removeValue = (node: LLNode, value: number): LLNode => {
    // Handles the first nodes with value same as "value"
    while (node.value === value) {
        node = node.next!
    }

    const first = node
    let prev: LLNode = node

    while (node) {
        if (node.value !== value) {
            prev = node
            node = node.next!
        } else {
            // Remove the node
            prev.next = node.next
            node = node.next?.next!
        }
    }

    return first
}

const list = { value: 1, next: { value: 2, next: { value: 3, next: { value: 4, next: undefined } } } }

printList(removeValue(list, 3))