// 배열을 구조 분해 할당
const arr = ['hello', 'world', '!']
const [first, second] = arr;
console.log(first, second); // hello, world

// 객체를 구조 분해 할당
const obj = {name: '이선협', publisher: '골든래빗'};
const {name, publisher} = obj;
console.log(name, publisher); // 이선협 골든래빗

let a = 5;
let b = 10;
[a, b] = [b, a];

const makePerson = ({familyName, givenName, address}) => {
    return {
        name: `${givenName} ${familyName}`,
        address
    }
}

const person = makePerson({
    familyName: 'Lee',
    givenName: `Sunhyoup`,
    address: 'Seoul',
    country: 'South Korea'
})
console.log(person); // name과 address만 있음

// 배열 병합
const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];
const numbers = [...evenNumbers, ...oddNumbers]
console.log(numbers); // [2, 4, 6, 8, 10, 1, 3, 5, 7, 9]

// 객체 병합
const person = {
    name: 'Sunhyoup Lee',
    familyName: 'Lee',
    givenName: 'Sunhyoup',
    country: 'USA',
}
const address = {
    country: 'South Korea',
    city: 'Seoul',
}
const merge = {...person, ...address} // country와 city가 합쳐짐

const names = ['Lee', 'Kim', 'Park', 'Lee', 'Kim']
const uniqueNames = [...new Set(names)]; // 배열로 변환
console.log(uniqueNames); // ['Lee', 'Kim', 'Park']

// func 함수는 flag가 true면 실행
flag && func();

// 객체 병합에도 이용 가능, showAddress가 true면 객체 병합
const makeCompany = (showAddress) => {
    return {
        name: 'GolenRabbit',
        ...showAddress && {address: 'Seoul'},
        // showAddress가 true면 뒤 객체에 스프레드 연산자 적용
    }
}
console.log(makeCompany(false)); // {name: "GoldenRabbit"}
console.log(makeCompany(true)); // {name: "GoldenRabbit", address: "seoul"}

// participantName이 0, undefined, 빈 문자열, null일 경우 'Guest'로 할당
const name = participantName || 'Guest';