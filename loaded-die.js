function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  var index=0;

  return function() {
    var previousIndex = index;
    if (previousIndex === list.length - 1) {
      index = 0;
    } else {
      index ++;
    }
    return list[previousIndex];
  }
}

var rollLoadedDie = makeLoadedDie();

// for (var i = 0; i < 20; i ++) {
//   console.log(rollLoadedDie());
// }
console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6