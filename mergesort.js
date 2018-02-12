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
