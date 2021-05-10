//#1

let myBody = document.getElementsByTagName('body');
console.log(myBody);

//#2
let firstElement = body.firstElementChild;
console.log(firstElement);

//#3
let lastElement = body.lastElementChild;
console.log(lastElement);

//#4
let allElements = body.childre;
console.log(allElements);

//#5
let li = document.getElementsByTagName('li');
console.log(li);

let firstLi = li.firstElementChild;
let nextLi = firstLi.nextElementSibling;
console.log(firstLi);
console.log(nextLi);

//#6

let secondElementLi = li[1];
let previousLi = secondElementLi.previousElementSiblingSibling;
console.log(secondElementLi);
console.log(previousLi);
