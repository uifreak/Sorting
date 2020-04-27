import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

let arrayValue = [2, 5, 4, 1, 7, 8, 6, 9];
document.getElementById("value").innerHTML = quickSort(arrayValue);

function sortArray(arrayValue) {
  if (arrayValue.length === 0) return [];
  for (let ite = 0; ite < arrayValue.length; ite++) {
    for (let jte = ite + 1; jte < arrayValue.length; jte++) {
      // Swap Array
      if (arrayValue[ite] > arrayValue[jte]) {
        arrayValue[ite] = arrayValue[ite] + arrayValue[jte];
        arrayValue[jte] = arrayValue[ite] - arrayValue[jte];
        arrayValue[ite] = arrayValue[ite] - arrayValue[jte];
      }
    }
  }
  return arrayValue;
}

function quickSort(array) {
  if (array.length === 0) return [];

  var left = [],
    right = [],
    pivot = array[0];

  for (var i = 1; i < array.length; i++) {
    if (array[i] < pivot) left.push(array[i]);
    else right.push(array[i]);
  }

  return quickSort(left).concat(pivot, quickSort(right));
}
