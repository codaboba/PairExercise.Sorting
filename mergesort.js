function mergeSort(arr) {
  if (arr.length === 0) {
    return [];
  }
  if (arr.length === 1) {
    return arr;
  } else if (arr.length > 1) {
    const splitList = split(arr);
    const left = splitList[0];
    const right = splitList[1];
    const deepLeft = mergeSort(left);
    const deepRight = mergeSort(right);
    let joined = [];
    let next;

    while (deepLeft.length && deepRight.length) {
      next = deepLeft[0] < deepRight[0] ? deepLeft.shift(0) : deepRight.shift(0);
      joined = merge(joined, next);
    }

    const remaining = deepLeft.length ? deepLeft : deepRight;
    joined = merge(joined, remaining);

    return joined;
  }
}

function merge(arr, value) {
  return arr.concat(value);
}

function split(arr) {
  const midpoint = Math.round(arr.length / 2);
  const left = arr.slice(0, midpoint);
  const right = arr.slice(midpoint);
  return [left, right];
}

