function quickSort(arr, left, right) {
  //Se left menor que right executa algoritmo
  if (left < right) {
    let pi = partition(arr, left, right);
    //Percorre array tanto no lado esquerdo quanto o direito
    quickSort(arr, left, pi - 1);
    quickSort(arr, pi + 1, right);
  }
}

function partition(arr, left, right) {
  let pivot = arr[right];

  let i = left - 1;

  for (let j = left; j < right; j++) {
    if (arr[j] <= pivot) {
      i++;
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
  let temp = arr[i + 1];
  arr[i + 1] = arr[right];
  arr[right] = temp;

  return i + 1;
}

let arr = [8, 3, 7, 4, 2, 6, 1, 5];

quickSort(arr, 0, arr.length - 1);

console.log(arr);
