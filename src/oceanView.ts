// Ocean View

function oceanView(heights: number[]): number[] {
    if (heights.length === 0) return []

    const buildings: number[] = []
    let max = -1

    for (let i = heights.length - 1; i >= 0; i--) {
        if (heights[i] > max) {
            buildings.push(i)
            max = heights[i]
        }
    }

    return buildings.reverse()
}

// Example usage
console.log(oceanView([4, 3, 2, 1, 3, 2, 1])) // [0, 4, 5, 6]
