// Find the point that appears in most segments.
// A segment is represented with a start and an end point.
// A point is represented with a single number.
// Input: A list of segments where each segment is a list of two numbers.
// Output: A single number.
// Runtime: O(number of segments)

export function findPointInMostSegments(segments: number[][]): number {
    function preProcess(segments: number[][]): [number, 'S' | 'E'][] {
        const arr: [number, 'S' | 'E'][] = []

        for (let segment of segments) {
            arr.push([segment[0], 'S'])
            arr.push([segment[1], 'E'])
        }

        const sortedArray = arr
            .sort((a, b) => a[0] - b[0])
            .sort((a, b) => {
                return a[0] === b[0] ? (a[1] === 'S' ? -1 : 1) : 0
            })

        return sortedArray
    }

    const processedList = preProcess(segments)
    let maxSegments = 0
    let currentOverlapping = 0
    let point = -1

    for (let segment of processedList) {
        if (segment[1] === 'S') {
            currentOverlapping++
            if (maxSegments < currentOverlapping) {
                maxSegments = currentOverlapping
                point = segment[0]
            }
        } else {
            // Ending Segment
            currentOverlapping--
        }
    }

    return point
}

console.log(
    findPointInMostSegments([
        [1, 3],
        [2, 4],
        [3, 5],
        [4, 6],
    ])
) // Should return 3
