function solution(s) {
    // x의 모든 0 제거
    // x의 길이를 c라고 하면 x를 c를 2진법으로 표현한 문자열
    // 1이 될 때까지 반복
    // 이진 변환 횟수와 제거된 0의 개수 반환

    // 이진 변환 횟수 저장
    let countTransform = 0
    // 제거된 모든 0의 개수 저장
    let countZero = 0

    // s가 '1'이 아닌 동안 반복
    while(s !== '1') {
        // 문자열을 배열로 변환
        s = s.split('')
        // 이진 변환 횟수를 1 증가
        countTransform += 1
        // s에서 '0'의 개수를 세어 countZero에 누적
        countZero += s.filter((c) => c === '0').length
        // s에서 '1'의 개수를 세고 이를 이진수로 변환
        s = s.filter((char) => char === '1').length.toString(2)
    }

    // 이진 변환 횟수와 제거된 0의 개수 반환
    return [countTransform, countZero]
}