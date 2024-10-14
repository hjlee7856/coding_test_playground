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