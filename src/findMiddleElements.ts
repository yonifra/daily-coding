// This question is asked by Amazon. Given a non-empty linked list, return the middle node of the list. If the linked list contains an even number of elements, return the node closer to the end.
// Ex: Given the following linked lists...

// 1->2->3->null, return 2
// 1->2->3->4->null, return 3
// 1->null, return 1

interface LLNode {
    value: number
    next: LLNode | undefined
}

const findMiddle = (head: LLNode): number => {
    let counter: number = 1
    let curr = head

    while (curr) {
        counter++
        curr = curr.next!
    }

    const target = Math.ceil(counter / 2)
    counter = 1
    curr = head

    while (counter !== target) {
        curr = curr.next!
        counter++
    }

    return curr.value
}

const list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: { value: 5, next: { value: 6, next: undefined } },
            },
        },
    },
}

console.log(findMiddle(list))
