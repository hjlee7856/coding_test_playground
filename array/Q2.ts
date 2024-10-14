// 몸풀기 문제 중복 제거 및 내림차 정렬
function solution(arr) {
    const uniqueArr = [...new Set(arr)] // 중복 제거, 배열로 변환, O(n)
    uniqueArr.sort((a, b) => b - a); // // 내림차순 정렬 (NlogN)
    return uniqueArr; // 반환 O(NlogN)
}