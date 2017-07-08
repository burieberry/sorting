describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect(bubbleSort([])).toEqual( [] );
  });
});

describe('Bubble Sort', function(){
  it('moves the largest of the two items to the end', function(){
    expect(bubbleSort([5, 2])).toEqual([2, 5]);
  });
});

describe('Bubble Sort', function(){
  it('sorts in ascending order', function(){
    expect(bubbleSort([3, 2, 2, 1])).toEqual([1, 2, 2, 3]);
  });
});

describe('Bubble Sort', function(){
  it('sorts in ascending order (many numbers)', function(){
    expect(bubbleSort([0,-3,5,2,3,4,99,50,5])).toEqual([-3,0,2,3,4,5,5,50,99]);
  });
});

describe('Bubble Sort', function(){
  it('sorts in ascending order (many numbers)', function(){
    expect(bubbleSort([-3, 0, 2, 3, 4, 5, 50, 5, 99 ])).toEqual([-3,0,2,3,4,5,5,50,99]);
  });
});
