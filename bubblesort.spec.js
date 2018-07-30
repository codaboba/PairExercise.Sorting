describe('Swap', function () {
  beforeAll(function () {
    spyOn(window, 'swap').and.callThrough();
  });

  it('swaps values x number of times', function () {

  })
});

describe('Bubble Sort', function () {
  let collection;



  beforeEach(() => {
    collection = [];
  })

  it('is a function', function () {
    expect(typeof bubbleSort).toBe('function');
  });
  it('handles an empty array', function () {
    expect(bubbleSort(collection)).toEqual([]);
  });
});
