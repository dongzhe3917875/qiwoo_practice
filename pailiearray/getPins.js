var queryTable = {
  "1": ["1", "2", "4"],
  "2": ["1", "2", "3", "5"],
  "3": ["2", "3", "6"],
  "4": ["1", "4", "5", "7"],
  "5": ["2", "4", "5", "6", "8"],
  "6": ["3", "5", "6", "9"],
  "7": ["4", "7", "8"],
  "8": ["5", "7", "8", "9", "0"],
  "9": ["6", "8", "9"],
  "0": ["0", "8"]
}

function getPINs(observed) {
  // TODO: This is your job, detective!
  var observeArray = observed.split("");
  var args = [];
  observeArray.forEach(function(ele) {
    args.push(queryTable[ele]);
  })
  var newArray = []
  args.map(function(ele, index) {
    var obj = {};
    obj[ele] = index;
    newArray.push(obj);
  })
  var result = [];

  function next(array, n) {
    var arrayone = Object.keys(array)[0].split(",");
    for (var i = 0; i < arrayone.length; i++) {
      arraynext = newArray[array[arrayone] + 1]
      if (arraynext) {
        next(arraynext, n + arrayone[i])
      } else {
        result.push(n + arrayone[i]);
      }
    }
  }
  next(newArray[0], "");
  return result;
}
