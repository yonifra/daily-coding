// 155. Min Stack - Medium
// https://leetcode.com/problems/min-stack/

class MinStack {
    stack: { val: number; min: number }[] = []
    min: number

    constructor() {
        this.stack = []
        this.min = Infinity
    }

    push(val: number): void {
        this.min = Math.min(val, this.min)
        this.stack.push({ val, min: this.min })
    }

    pop(): void {
        this.stack.pop()
    }

    top(): number {
        return this.stack[this.stack.length - 1].val
    }

    getMin(): number {
        return this.stack[this.stack.length - 1].min
    }
}
