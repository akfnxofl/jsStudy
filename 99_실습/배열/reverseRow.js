function reverseRow(arr, x) {
  let reversed = [];
  for(let i = arr[x].length-1; i >= 0; i--) {
    reversed.push(arr[x][i]);
  }
  arr[x] = reversed;
}

exports.reverse = reverseRow;