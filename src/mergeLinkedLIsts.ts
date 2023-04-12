// This question is asked by Apple. Given two sorted linked lists, merge them together in ascending order and return a reference to the merged list

// Ex: Given the following lists...

// list1 = 1->2->3, list2 = 4->5->6->null, return 1->2->3->4->5->6->null
// list1 = 1->3->5, list2 = 2->4->6->null, return 1->2->3->4->5->6->null
// list1 = 4->4->7, list2 = 1->5->6->null, return 1->4->4->5->6->7->null

interface LinkedListNode {
    value: number;
    next: LinkedListNode | undefined
}

const mergeLinkedLists = (list1: LinkedListNode, list2: LinkedListNode): LinkedListNode => {
    const head = list1.value > list2.value ? list2 : list1

    while (list1 && list2) {
        if (list1.value < list2.value) {
            if (list1.next && list1.next.value < list2.value) {
                const temp = list1.next
                list1.next = list2
                list1 = temp!

                const temp2 = list2.next
                list2.next = temp
                list2 = temp2!
            } else {

            }
        }
    }

    return head
}

const printLinkedList = (head: LinkedListNode) => {
    const parts: number[] = []
    while(head) {
        parts.push(head.value)
        head = head.next!
    }

    console.log(parts.join(', '))
}

const list1 = { value: 1, next: { value: 2, next: { value: 3, next: undefined } } }
const list2 = { value: 4, next: { value: 5, next: { value: 6, next: undefined } } }
printLinkedList(mergeLinkedLists(list1, list2))