const arr = [1, 2, 3];
console.log(arr[0]); // 1
console.log(arr[1]); // 2

const arr = [1, 2, 3];
console.log(arr.length); // 3

const arr = [1, 2, 3];
arr.push(4);
console.log(arr[3]); // 4

const arr = [1, 2, 3];
const value = arr.pop();
console.log(value); // 3
console.log(arr.length); // 2

const arr = [0, 0, 0, 0, 0, 0];
const arr1 = new Array(6); // [undefined, undefined, ...]
const arr2 = [...new Array(6)].map((_, i) => i + 1); // [1, 2, 3, 4, 5, 6]
const arr = new Array(6).fill(0); // [0, 0, 0, 0, 0, 0]

// 2차원 배열을 리터럴로 표현
const arr =[[1,2,3,4], [5,6,7,8], [9,10,11,12]];
console.log(arr[2][3]); // 12
arr[2][3] = 15;
console.log(arr[2][3]); // 15

// 크기가 3*4인 배열을 선언하는 예  
const arr = [...new Array(3)].map((_, i) => new Array(4).fill(i));
// [[0, 0, 0, 0], [1, 1, 1, 1], [2, 2, 2, 2]]

// push 메서드로 데이터 추가
const arr = [1, 2, 3]
arr.push(4) // [1, 2, 3, 4]

// concat 메서드로 데이터 추가
let arr = [1, 2, 3];
arr = arr.concat([4, 5]) // [1, 2, 3, 4, 5]

// 스프레드 연산자로 데이터 추가
let arr = [1, 2, 3];
arr = [...arr, ...[4, 5]] // [1, 2, 3, 4, 5]

// unshift()메서드로 데이터 추가: 배열의 맨 앞에 데이터 추가
let arr = [1, 2, 3];
arr.unshift(0) // [0, 1, 2, 3]

// splice() 메서드로 데이터 추가: 배열 중간에 데이터 추가
const arr = [1, 2, 3, 4, 5]
arr.splice(2, 0, 9999) // [1, 2, 9999, 3, 4, 5]

// pop() 메서드로 마지막 데이터 삭제: 마지막 데이터를 삭제하고 반환
const arr = [1, 2, 3, 4, 5]
const poppedElement = arr.pop(); // 5
console.log(arr) // [1, 2, 3, 4]

// shift() 메서드로 맨 앞 데이터 삭제: 맨 앞 데이터를 삭제하고 반환
const arr = [1, 2, 3, 4, 5]
const shiftedElement = arr.shift(); // 1
console.log(arr) // [2, 3, 4, 5]

// splice 메서드로 중간 데이터 삭제
const arr = [1, 2, 3, 4, 5]
const removedElements = arr.splice(2, 2) // [3, 4]
console.log(arr) // [1, 2, 5]

// 배열에 제곱 연산 적용 예
const numbers = [1, 2, 3, 4, 5]
const squares = numbers.map(num => num * num); // [1, 4, 9, 16, 25]

// 짝수 필터링 예
const numbers = [1, 2, 3, 4, 5]
const evens = numbers.filter(num => num % 2 === 0) // [2, 4]

// 전체 합 예
const numbers = [1, 2, 3, 4, 5]
const sum = numbers.reduce((a, b) => a + b) // 15