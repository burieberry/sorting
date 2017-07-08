describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect(bubbleSort([])).toEqual([]);
  });

  it('sorts an array of one element', function(){
    expect(bubbleSort([7])).toEqual([7]);
  });

  it('sorts two elements', function(){
    expect(bubbleSort([5, 2])).toEqual([2, 5]);
  });

  it('sorts an array of many elements', function(){
    expect(bubbleSort([3, 2, 2, 1])).toEqual([1, 2, 2, 3]);
    expect(bubbleSort([0, -3, 5, 2, 3, 4, 99, 50, 5])).toEqual([-3, 0, 2, 3, 4, 5, 5, 50, 99]);
    expect(bubbleSort([5, 2, 7, 9, 3, 5, 4, 1, 0])).toEqual([0, 1, 2, 3, 4, 5, 5, 7, 9]);
  });

  it('sorts in ascending order (many numbers)', function(){
    expect(bubbleSort([-3, 0, 2, 3, 4, 5, 50, 5, 99 ])).toEqual([-3, 0, 2, 3, 4, 5, 5, 50, 99]);
  });
});

// to do: add spyOns, and possibly random array generator
