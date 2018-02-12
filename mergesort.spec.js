describe('Split function', () => {
  it('is able to split an array into two halves', () => {
    expect(split([5, 1, 0, 2])).toEqual([[5, 1], [0, 2]]);
    expect(split([5, 0, 2])).toEqual([[5, 0], [2]]);
    expect(split([-3, 5, -3, 0, 0])).toEqual([[-3, 5, -3], [0, 0]]);
  });
});
