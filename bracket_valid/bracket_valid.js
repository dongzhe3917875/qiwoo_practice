function findMatch(sign) {
  var match = ""
  if (sign == "(") {
    match = ")"
  }
  if (sign == "[") {
    match = "]"
  }
  if (sign == "{") {
    match = "}"
  }
  return match;
}

function valid(array) {
  var len = array.length;
  if (len == 0) {
    return true;
  }
  array.map(function(ele, index) {
    if (array[index + 1] == findMatch(ele)) {
      array.splice(index, 2);
    }
  });
  if (len == array.length) {
    return false;
  } else {
    return valid(array);
  }
}

function validBraces(braces) {
  var array = braces.split("");
  return valid(array);
}
