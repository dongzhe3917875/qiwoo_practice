var array1 = ['1', '2', '3'];
var array2 = ['2', '3', '4'];
var array3 = ['3', '4', '5'];
var args = [array1, array2, array3];
var item = 0;
var result = []

function next(array, n) {
  for (var i = 0; i < array.length; i++) {
    arraynext = args[args.indexOf(array) + 1]
    if (arraynext) {
      next(arraynext, n + array[i])
    } else {
      result.push(n + array[i]);
    }
  }
}
next(array1, "");
