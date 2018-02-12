function split(arr) {
   const p = 0, // first index
      r = arr.length - 1, // last index
      q = Math.floor((r + p) / 2); // middle index

  // without using slice method:
  // let firstHalf = [],
  //     secondHalf = [];

  // let k = p;

  // for (let i = 0; k < q + 1; i++, k++) {
  //   firstHalf[i] = arr[k];
  // }

  // for (let j = 0; k < r + 1; j++, k++) {
  //   secondHalf[j] = arr[k];
  // }

  // using slice:
  const firstHalf = arr.slice(p, q + 1);
  const secondHalf = arr.slice(q + 1);

  return [firstHalf, secondHalf];
}

function merge(arr1, arr2) {
  let i = 0, // arr1 index
      j = 0; // arr2 index
  let mergedArr = [];

  for (var k = 0; i < arr1.length && j < arr2.length; k++) {
    if (arr1[i] <= arr2[j]) {
      mergedArr.push(arr1[i++]);
    }
    else {
      mergedArr.push(arr2[j++]);
    }
  }

  for ( ; i < arr1.length; i++) { mergedArr.push(arr1[i]); }

  for ( ; j < arr2.length; j++) { mergedArr.push(arr2[j]); }

  return mergedArr;
}

function mergeSort(arr) {
  if (arr.length < 2) { return arr; }
  else {
    const halves = split(arr);
    return merge(mergeSort(halves[0]), mergeSort(halves[1]));
  }
}
