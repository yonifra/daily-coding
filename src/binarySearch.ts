const search2 = function(start: number, end: number, nums: number[], target: number): number {
    if (end <= start) {
      if (nums[end] === target) {
        return end
      }

      return -1
    }

    let mid = start

    if (Math.abs(start - end) === 1) {
        if (nums[start] === target) {
            return start
        } else if (nums[end] === target) {
            return end
        } else {
            return -1
        }
    }

    if (target === nums[mid]) {
        return mid
    } else if (target > nums[mid]) {
        return search2(mid+1, nums.length - 1, nums, target)
    } else {
        return search2(0, mid-1, nums, target)
    }
  }

  var search = function(nums: number[], target: number): number {
    if (!nums || nums.length === 0) {
        return -1;
    }

    return search2(0, nums.length - 1, nums, target)
  };

  console.log(search([-1,0,3,5,9,12], 9))