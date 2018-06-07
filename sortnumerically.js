// var array = [10, 2, 5, 1, 9];

// array.sort(function(a,b){
//   return a-b;
// });

// console.log(array);

var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

function sortStudents(people) {
  people.sort(function(a, b) {
    var nameA = a.name.toUpperCase(); // ignore upper and lowercase
    var nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    // names must be equal
    var ageA = a.age;
    var ageB = b.age;
    if (ageA > ageB) {
      return -1;
    } else {
      return 1;
    }
  });
}

sortStudents(students);
console.log(students);