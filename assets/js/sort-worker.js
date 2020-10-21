self.addEventListener("message", function(evt) {
  let numbersToSort = evt.data;
  self.postMessage(bubbleSort(numbersToSort));
});

// Bubble-sort code below written by Ben Grunfeld, found at http://jsfiddle.net/bengrunfeld/h8zma0o2/
function swap(items, firstIndex, secondIndex) {
  var temp = items[firstIndex];
  items[firstIndex] = items[secondIndex];
  items[secondIndex] = temp;
}

function bubbleSort(items) {
  var i, j, k = 0

  for (i = 0; i < items.length; i++){
    for (j = 0, k = items.length-i; j < k; j++){
      if (items[j] > items[j + 1]){
        swap(items, j, j + 1);
      }
    }
  }

  return items;
}
