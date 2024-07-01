// Time Map - Medium
// https://leetcode.com/problems/time-based-key-value-store/
// Create a timebased key-value store class TimeMap, that supports two operations.

class TimeMap {
    store = {};
    constructor() {
        this.store = {}; // Initialize an empty object to store key-value pairs
    }

    set(key, value, timestamp) {
        if (!this.store[key]) {
            this.store[key] = []; // Initialize an empty array for the key if it doesn't exist
        }
        this.store[key].push({ timestamp, value }); // Push the {timestamp, value} object to the array
    }

    get(key, timestamp) {
        if (!this.store[key]) {
            return ""; // Return an empty string if the key doesn't exist
        }

        const values = this.store[key];
        let left = 0;
        let right = values.length - 1;

        // Binary search to find the right value
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (values[mid].timestamp === timestamp) {
                return values[mid].value;
            } else if (values[mid].timestamp < timestamp) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        // If we don't have an exact match, check the largest timestamp smaller than the given timestamp
        return right >= 0 ? values[right].value : "";
    }
}
