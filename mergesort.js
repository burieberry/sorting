function split(arr) {
  let firstHalf = [],
      secondHalf = [];

  let p = 0, // first index
      r = arr.length - 1, // last index
      q = Math.floor((r + p) / 2); // middle index

  let k = p;

  for (let i = 0; k < q + 1; i++, k++) {
    firstHalf[i] = arr[k];
  }

  for (let j = 0; k < r + 1; j++, k++) {
    secondHalf[j] = arr[k];
  }

  return [firstHalf, secondHalf];
}

function merge(arr1, arr2) {
  let i = 0, j = 0;
  let newArr = [];

  for (var k = 0; i < arr1.length && j < arr2.length; k++) {
    if (arr1[i] <= arr2[j]) {
      newArr[k] = arr1[i];
      i++;
    }

    else {
      newArr[k] = arr2[j];
      j++;
    }
  }

  while (i < arr1.length) {
    newArr[k] = arr1[i];
    k++;
    i++;
  }

  while (j < arr2.length) {
    newArr[k] = arr2[j];
    k++;
    j++;
  }

  return newArr;
}
