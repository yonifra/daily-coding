/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        let left = 1
        let right = n

        while (left < right) {
            let mid = Math.floor(left + (right - left) / 2)
            if (isBadVersion(mid)) {
                right = mid // The bad version might be before or at mid
            } else {
                left = mid + 1 // The bad version must be after mid
            }
        }

        return left // At this point, left and right converge, representing the first bad version
    }
}
