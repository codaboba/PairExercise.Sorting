function bubbleSort(collection) {
  let len = collection.length;
  let sorted = collection;
  let newCollection;
  if (len === 0) {
    return [];
  } else if (len < 2) {
    return collection;
  }

  for (let i = 0; i < len; i++) {
    const next = i + 1;
    if (collection[i] > collection[next]) {
      sorted = swap(collection, i, next);
    }
  }
  newCollection = sorted.slice(0, -1);
  return bubbleSort(newCollection).concat(sorted.slice(-1));
}

function swap(collection, index1, index2) {
  [collection[index1], collection[index2]] = [collection[index2], collection[index1]]
  return collection;
}
