function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }
  if (arr.length === 2) {
    if (arr[0] > arr[1]) {
      return merge(arr[0], arr[1]);
    } else {
      return merge(arr[1], arr[0]);
    }
  } else {
    const left = split(arr)[0];
    const right = split(arr)[1];
    mergeSort(left);
    mergeSort(right);
  }
}

function merge(arr1, arr2) {
  return [...arr1, ...arr2];
}

function split(arr) {
  const midpoint = Math.floor(arr.length / 2);
  const left = arr.slice(0, midpoint);
  const right = arr.slice(midpoint);
  return [left, right];
}

