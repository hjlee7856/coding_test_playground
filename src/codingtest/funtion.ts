const f = () => {};
console.log(typeof f); // funtion

// 일반적인 함수 정의
function fn1(param1, param2) {
    let result;
    return result;
}

// 화살표 함수 할당
const fn2 = (param1, param2) => {
    let result;
    return result;
}

function add(a: number, b: number) {
    return a + b;
}
const result = add(1, 2);
console.log(result); // 3

function (a, b) {
    return a + b;
}

(a, b) => {
    return a + b;
}