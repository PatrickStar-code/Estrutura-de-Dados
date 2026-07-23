function binarySearch(arr, target) {
  low = 0;
  high = arr.length - 1;

  while (low < high) {
    mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 3)); // returns 2
