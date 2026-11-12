function merge(left, right) {
  const result = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  // One array is used up; add whatever remains of the other
  while (i < left.length) {
    result.push(left[i]);
    i++;
  }
  while (j < right.length) {
    result.push(right[j]);
    j++;
  }

  return result;
}

function mergeSort(arr) {
  // Base case: 0 or 1 items is already sorted
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  // Sort each half recursively, then merge them
  return merge(mergeSort(left), mergeSort(right));
}

console.log(mergeSort([]));                          // []
console.log(mergeSort([73]));                        // [ 73 ]
console.log(mergeSort([1, 2, 3, 4, 5]));             // [ 1, 2, 3, 4, 5 ]
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));   // [ 0, 1, 1, 2, 3, 5, 8, 13 ]
console.log(mergeSort([105, 79, 100, 110]));         // [ 79, 100, 105, 110 ]