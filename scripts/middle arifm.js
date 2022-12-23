const ocnk = (arr) => {
  return arr.reduce((acum, el) => acum + el, 0) / arr.length;
};

console.log("Матем - " + ocnk([7, 7, 7, 9, 7]));
console.log("Русс яз - " + ocnk([9, 6, 8]));
console.log("Русс лит - " + ocnk([]));
console.log("Бел яз - " + ocnk([]));
console.log("Бел лит - " + ocnk([7]));
console.log("География - " + ocnk([10, 7, 4, 6, 9]));
console.log("Биология - " + ocnk([]));
console.log("Англ яз - " + ocnk([8, 8, 4, 8]));
console.log("Химия - " + ocnk([10, 10, 10, 7, 7]));
console.log("Физика - " + ocnk([10, 3, 7]));
console.log("Информатика - " + ocnk([10, 10]));
console.log("Труд - " + ocnk([10, 10, 9]));
console.log("Физра - " + ocnk([9, 6, 10]));
console.log("Всемирная история - " + ocnk([8]));
console.log("История Беларуси - " + ocnk([8]));
