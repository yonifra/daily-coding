// This question is asked by Microsoft. Design a class, MovingAverage, which contains a method, next that is responsible for returning the moving average from a stream of integers.
// Note: a moving average is the average of a subset of data at a given point in time.

// Ex: Given the following series of events...

// i.e. the moving average has a capacity of 3.
// MovingAverage movingAverage = new MovingAverage(3);
// m.next(3) returns 3 because (3 / 1) = 3
// m.next(5) returns 4 because (3 + 5) / 2 = 4
// m.next(7) = returns 5 because (3 + 5 + 7) / 3 = 5
// m.next(6) = returns 6 because (5 + 7 + 6) / 3 = 6

// MovingAverage class takes in a capacity and returns the average of the last 'capacity' numbers
class MovingAverage {
    capacity: number // the number of elements in the array
    arr: number[] // the array to store the last 'capacity' numbers

    constructor(capacity: number) {
        this.capacity = capacity
        this.arr = [] // initialize the array
    }

    next(n: number): number {
        if (this.arr.length === this.capacity) { // if the array is at capacity
            this.arr.shift() // remove the first element
        }
        this.arr.push(n) // add the new element
        return this.arr.reduce((accumulator, currentValue) => accumulator + currentValue,0) / this.arr.length // return the average
    }
}

// run the runStuff function
runStuff()
const runStuff = () => {
    const movingAverage = new MovingAverage(3)
    console.log(movingAverage.next(3))
    console.log(movingAverage.next(5))
    console.log(movingAverage.next(7))
    console.log(movingAverage.next(6))
}

runStuff()