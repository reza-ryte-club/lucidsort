exports.lucidSort(param) {
  return _sort(param);
}

function _sort(param) {
  var sortOrder = 1;
  if(param[0] === "-") {
    sortOrder = -1;
    param = param.substr(1);
  }
  return function (a,b) {
    var result = (a[param] < b[param]) ? -1 : (a[param] > b[param]) ? 1 : 0;
    return result * sortOrder;
  }
}
