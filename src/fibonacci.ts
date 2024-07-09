// Fibonacci with a cache mechanism for better performance and memory efficiency

const cache = [0, 1, 1]

function fibonacciWithCache(n: number): number {
    if (cache[n] !== undefined) {
        // Return cached value if it exists
        return cache[n]
    } else {
        // Compute the Fibonacci number and store it in the cache
        cache[n] = fibonacciWithCache(n - 1) + fibonacciWithCache(n - 2)
        return cache[n]
    }
}

console.log(fibonacciWithCache(140))
console.log(fibonacciWithCache(30))
