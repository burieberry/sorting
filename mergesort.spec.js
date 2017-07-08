describe('Merge Sort', function(){
  describe('split array function', function(){
    it('is able to split an empty array into two empty arrays', function(){
      expect( split([]) ).toEqual( [[], []] );
    });

    it('is able to split an array into two halves', function(){
      expect( split([0, 1, 4, 9]) ).toEqual( [[0, 1], [4, 9]] );
    });

    it('is able to split an odd numbered array into two halves', function(){
      expect( split([9, 4, 6, 1, -5]) ).toEqual( [[9, 4], [6, 1, -5]] );
    });
  });

  describe('merge', function(){
    it('given two arrays, returns an array', function () {
      expect(merge([], [])).toEqual([]);
    });

    it('given two already sorted arrays of equal length, returns sorted result array', function () {
      expect(merge([4, 9], [0, 1])).toEqual([0, 1, 4, 9]);
      expect(merge([1, 5, 10], [2, 4, 11])).toEqual([1, 2, 4, 5, 10, 11]);
      expect(merge([1, 9, 10], [2, 3, 8])).toEqual([1, 2, 3, 8, 9, 10]);
    });

    it('works for arrays of unequal length', function () {
      expect(merge([1, 5, 10, 20, 21], [2, 4, 100])).toEqual([1, 2, 4, 5, 10, 20, 21, 100]);
    });
  });

  // describe('mergeSort function', function(){

  // });



});
