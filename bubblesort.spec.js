describe('Bubble Sort', () => {
  beforeAll(() => {
    spyOn(sorting, 'swap').and.callThrough();
  });

  it('handles an empty array', () => {
    expect(sorting.bubbleSort([])).toEqual([]);
  });

  it('returns sorted array', () => {
    expect(sorting.bubbleSort([3, 5, 0])).toEqual([0, 3, 5]);
  });

  it('first test requires swap fn to be called twice', () => {
    expect(sorting.swap.calls.count()).toEqual(2);
  });

  it('can sort a more complex array', () => {
    expect(sorting.bubbleSort([-1, 3, -4, 0, 20, 0, -10])).toEqual([-10, -4, -1, 0, 0, 3, 20]);
  });

});
