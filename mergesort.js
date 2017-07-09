function split(array) {
  var midPoint = array.length / 2;
  var left = array.slice(0, midPoint);
  var right = array.slice(midPoint);
  return [left, right];
}

function merge(left, right) {
  var sorted = [],
    leftInd = 0,
    rightInd = 0;

  while (leftInd < left.length && rightInd < right.length) {
    if (right[rightInd] < left[leftInd]) {
      sorted.push(right[rightInd]);
      rightInd++;
    }
    else {
      sorted.push(left[leftInd]);
      leftInd++;
    }
  }

  for (; leftInd < left.length; leftInd++) sorted.push(left[leftInd]);
  for (; rightInd < right.length; rightInd++) sorted.push(right[rightInd]);

  return sorted;
}

function mergeSort(array) {
  if (array.length < 2) return array;

  var left = split(array)[0];
  var right = split(array)[1];

  return merge(mergeSort(left), mergeSort(right));
}
