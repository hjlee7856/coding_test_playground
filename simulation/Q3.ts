function solution(n) {
    // 거리 n
    // 이동 1 순간이동 거리*2
    // 이동한 횟수
    return n
        .toString(2) // 2진수로 변환
        .splice('') // 문자열에서 배열로
        .filter((c) => c === '1') // 1만 필터링
        .length // 1의 개수를 반환
}