describe('split', function () {
  beforeAll(function () {
    spyOn(window, 'split').and.callThrough()
  })

  it('is called 5 times', function () {
    window.mergeSort([8, 5, 3, 1, 10, 6])
    expect(window.split.calls.count()).toEqual(5);
  })
})

describe('mergeSort', function () {
  beforeAll(function () {
    spyOn(window, 'mergeSort').and.callThrough()
  })

  it('is called 11 times', function () {
    window.mergeSort([8, 5, 3, 1, 10, 6])
    expect(window.mergeSort.calls.count()).toEqual(11)
  })


  let collection;
  beforeEach(() => {
    collection = [8, 5, 3, 1, 10, 6];
  })

  it('is a function', function () {
    expect(typeof mergeSort).toBe('function');
  })

  it('handles an empty array', function () {
    expect(mergeSort([])).toEqual([]);
  })

  it('sorts an unordered array', function () {
    expect(mergeSort(collection)).toEqual([1, 3, 5, 6, 8, 10])
  })

  it('it does not change a sorted array', function () {
    expect(mergeSort([1, 3, 5, 6, 8, 10])).toEqual([1, 3, 5, 6, 8, 10]);
  })
})
