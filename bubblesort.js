function bubbleSort(arr) {
  for(var j = 0; j<arr.length; j++){
    for (var i = 1; i < arr.length; i++) {
      if (arr[i-1] >= arr[i]) {
        var temp = arr[i-1];
        arr[i-1] = arr[i];
        arr[i] = temp;
      }
    }
  }
  return arr;
}

// to do: separate in-order and swap functions
// optimize edge cases
