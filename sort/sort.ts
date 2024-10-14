function solution(strings, n) {
    return strings.sort((a, b) => {
        if(a[n] === b[n]) {
            return a > b ? 1 : -1
        } else {
          return a[n] > b[n] ? 1 : -1
        }
    });
}

function solution(n) {
    // 입력이 80억까지 온다면
    // 정수 n을 문자열로 변환하고 각 자릿수를 배열로 저장
    const digits = Array.from(String(n), Number);
    // 내림차순으로 정렬
    digits.sort((a, b) => {b - a})
    // 정렬된 자릿수를 다시 하나의 문자열로 합쳐 정수로 변환
    const answer = Number(digits.join(''))
    return answer
}

function solution(array, commands) {
    // i부터 j까지 자르고 정렬하고 k번째 수를 찾음
    const answer = []
    for(const command of commands) {
        const [i, j, k] = command
        // i부터 j까지 자르기
        const sliced = array.slice(i - 1, j)
        // 자른 배열을 정렬하기
        sliced.sort((a, b) => a - b)
        // k번째 원소 구하기
        answer.push(sliced[k - 1])
    }
    return answer
}