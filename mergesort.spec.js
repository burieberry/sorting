describe('Split function', () => {
  it('is able to split an array into two halves', () => {
    expect(split([5, 1, 0, 2])).toEqual([[5, 1], [0, 2]]);
    expect(split([5, 0, 2])).toEqual([[5, 0], [2]]);
    expect(split([-3, 5, -3, 0, 0])).toEqual([[-3, 5, -3], [0, 0]]);
  });
});


describe('Merge function', () => {
  it('can merge two sorted arrays into one sorted array', () => {
    expect(merge([1, 2, 5], [3, 4, 6])).toEqual([1, 2, 3, 4, 5, 6]);
    expect(merge([1, 8], [-5, -3, 0])).toEqual([-5, -3, 0, 1, 8]);
  });
});
