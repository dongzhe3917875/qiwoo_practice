var a = [72, 6, 57, 88, 60, 42, 83, 73, 48, 85];
Array.prototype.quickSort = function() {
  var result = [];

  function update(array) {
    if (array.length == 1) {
      return array;
    }
    var left = [];
    var right = [];
    var pivot = array[0];
    array.splice(0, 1);
    for (var i = 0; i < array.length; i++) {
      array[i] >= pivot ? right.push(array[i]) : left.push(array[i])
    }
    result.concat(update(left), [pivot], update(right))
  }
  update(this);
  console.log(result);
  // result.concat(update(left), [pivot], update(right))
}
a.quickSort()
