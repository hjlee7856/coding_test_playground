// 몸풀기 문제 오름차 정렬
function solution(arr) {
    arr.sort((a, b) => a - b); // 오름차 순으로 정렬
    // arr.sort()만 하면 문자열로 바라보고 제대로 정렬하지 않음
    return arr;
}