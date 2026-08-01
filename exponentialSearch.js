function binarySearch(arr, low = 0, high = None, target) {
  if (high === None) {
    high = arr.length - 1;
  }

  while (low < high) {
    mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }

    return -1;
  }
}

function exponentialSearch(arr, target) {
  if (arr[0] === target) {
    return 0;
  }

  n = arr.length;
  i = 1;

  while (i < n && arr[i] < target) {
    i = i * 2;
  }

  if (arr[i] === target) {
    return i;
  }

  return binarySearch(arr, i / 2, Math.min(i, n - 1), target);
}

console.log(exponentialSearch([1, 2, 3, 4, 5], 3)); // returns 2
