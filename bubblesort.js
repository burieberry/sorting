function bubbleSort(arr) {
  for (var i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      swap(arr, i, i + 1);
      bubbleSort(arr);
    }
  }
  return arr;
}

function swap(arr, firstIndex, secondIndex) {
  let temp = arr[firstIndex];
  arr[firstIndex] = arr[secondIndex];
  arr[secondIndex] = temp;
  return arr;
}
