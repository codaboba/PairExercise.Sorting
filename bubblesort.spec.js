describe('Swap', function () {
  beforeAll(function () {
    spyOn(window, 'swap').and.callThrough();
  });

  it('swaps values 0 number of times', function () {
    window.bubbleSort([1, 2, 3, 4])
    expect(window.swap.calls.count()).toEqual(0)
  });

  it('swaps values 5 number of times', function () {
    window.bubbleSort([2, 3, 5, 4, 1])
    expect(window.swap.calls.count()).toEqual(5)
  });
});

describe('Bubble Sort', function () {
  let collection;

  beforeAll(function () {
    spyOn(window, 'bubbleSort').and.callThrough();
  });

  it('bubbleSort is called 6 times', function () {
    window.bubbleSort([8, 5, 3, 1, 10, 6])
    expect(window.bubbleSort.calls.count()).toEqual(6)
  });

  beforeEach(() => {
    collection = [8, 5, 3, 1, 10, 6];
  })

  it('is a function', function () {
    expect(typeof bubbleSort).toBe('function');
  });
  it('handles an empty array', function () {
    expect(bubbleSort([])).toEqual([]);
  });
  it('sorts an unordered array', function () {
    expect(bubbleSort(collection)).toEqual([1, 3, 5, 6, 8, 10]);
  });
  it('it does not change a sorted array', function () {
    expect(bubbleSort([1, 3, 5, 6, 8, 10])).toEqual([1, 3, 5, 6, 8, 10]);
  })
});
