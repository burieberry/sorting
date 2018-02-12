const sorting = {};

sorting.bubbleSort = function(arr) {
  for (var i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      this.swap(arr, i, i + 1);
      this.bubbleSort(arr);
    }
  }
  return arr;
}

sorting.swap = function (arr, firstIndex, secondIndex) {
  let temp = arr[firstIndex];
  arr[firstIndex] = arr[secondIndex];
  arr[secondIndex] = temp;
  return arr;
}
