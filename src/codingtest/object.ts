const obj = {
    name: 'Sunhyoup',
    age: 30,
    'full-name': 'Sunhyoup Lee'
}

console.log(obj.name); // Sunhyoup, .으로 접근가능
console.log(obj['age']); // 30, 특수문자 들어가면 이 형태만 가능

const obj = {name: 'Sunhyoup'};
obj.age = 30;
console.log(obj.age); // 30

const obj = {name: 'Sunhyoup'};
obj.age = 30;
delete obj.age;
console.log(obj.age); // undefined