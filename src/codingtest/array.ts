import {i} from "vite/dist/node/types.d-aGj9QkWt";

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

//2차원 배열을 리터럴로 표현
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
const sum = numbers.reduce((a, b) => a+ b) // 15


// 몸풀기 문제 오름차 정렬
function solution(arr) {
    arr.sort((a, b) => a - b); // 오름차 순으로 정렬
    // arr.sort()만 하면 문자열로 바라보고 제대로 정렬하지 않음
    return arr;
}

// 몸풀기 문제 중복 제거 및 내림차 정렬
function solution(arr) {
    const uniqueArr = [...new Set(arr)] // 중복 제거, 배열로 변환, O(n)
    uniqueArr.sort((a, b) => b - a); // // 내림차순 정렬 (NlogN)
    return uniqueArr; // 반환 O(NlogN)
}

// 모의 테스트 두개 뽑아서 더하기
function solution(numbers) {
    const result = []

    for (let i = 0; i < numbers.length; i++) { // 현재 인덱스에서
        for(let j = 0; j < i; j++) { // 다른 인덱스 값 더한거 모두 넣음
            result.push(numbers[i] + numbers[j]);
        }
    }

    return [...new Set(result)].sort((a, b) => a - b);
}

// 모의 테스트 수포자
function solution(answers) {
    // 수포자들의 패턴
    const patterns = [
        [1, 2, 3, 4, 5], // 1번 패턴
        [2, 1, 2, 3, 2, 4, 2, 5], // 2번 패턴
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5] // 3번 패턴
    ]

    // 수포자들의 점수를 저장할 배열
    const scores = [0, 0, 0];

    // 각 수포자의 패턴과 정답이 얼마나 일치하는지 확인
    for(const [i, answer] of answers.entries()) {
        for(const [j, pattern] of patterns.entries()) {
            if(answer === pattern[i % pattern.length]) { // 패턴의 길이가 더 긴 경우 처음으로
                scores[j] += 1;
            }
        }
    }

    // 가장 높은 점수 저장
    const maxScore = Math.max(...scores);

    // 가장 높은 점수를 받은 수포자들의 번호를 찾아서 배열에 담음
    const highestScore = [];
    for (let i = 0; i < scores.length; i++) {
        if(scores[i] > maxScore) {
            highestScore.push(i + 1);
        }
    }

    return highestScore;
}

function solution(N, stages) {
    // 스테이지별 도전자 수를 구함
    const challenger = new Array(N + 2).fill(0)
    for (const stage of stages) {
        challenger[stage] += 1;
    }

    // 스테이지별 실패한 사용자 수 계산
    const fails = {};
    let total = stages.length;

    // 각 스테이지를 순회하며, 실패율 계산
    for(let i = 1; i <= N; i++) {
        if(challenger[i] === 0) {
            // 도전한 사람이 없는 경우, 실패율은 0
            fails[i] = 0;
            continue;
        }

        // 실패율 계산
        fails[i] = challenger[i] / total;

        // 다음 스테이지 실패율을 구하기 위해 현재 스테이지의 인원을 뺌
        total -= challenger[i];
    }

    // 실패율이 높은 스테이지부터 내림차순으로 정렬
    const result = Object.entries(fails).sort((a, b) => b[1] - a[1]);

    // 스테이지 번호만 반환
    return result.map((v) => Number(v[0]));
}

function isValidMove(nx, ny) {
    // 좌표평면을 벗어나는지 체크하는 함수
    return nx >= -5 && nx <= 5 && ny >= -5 && ny <= 5;
}

function updateLocation(x, y, dir) {
    switch (dir) {
        case "U":
            return [x, y + 1]
        case "D":
            return [x, y - 1]
        case "R":
            return [x + 1, y]
        case "L":
            return [x - 1, y]
    }
}

function solution(dirs) {
    let x = 0;
    let y = 0;
    const visited = new Set(); // 겹치는 좌표는 1개로 처리
    for(const dir of dirs) {
        const [nx, ny] = updateLocation(x, y, dir);
        if(!isValidMove(nx, ny)) {
            continue;
        }
        // A에서 B로 간 경우 B에서 A도 추가(총 경로의 개수는 방향성이 없음)
        visited.add(`${x}${y}${nx}${ny}`)
        visited.add(`${nx}${ny}${x}${y}`)
        [x, y] = [nx, ny] // 좌표를 이동했으므로 업데이트
    }
    return visited.size / 2;
}