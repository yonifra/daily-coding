// Daily Temperatures - [MEDIUM]
// https://leetcode.com/problems/daily-temperatures/

function dailyTemperatures(temperatures: number[]): number[] {
    const stack = []
    const res = new Array(temperatures.length).fill(0)

    for (let i = 0; i < temperatures.length; i++) {
        while (
            stack.length &&
            temperatures[i] > temperatures[stack[stack.length - 1]]
        ) {
            const index = stack.pop()
            res[index] = i - index
        }
        stack.push(i)
    }

    return res
}

dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])
