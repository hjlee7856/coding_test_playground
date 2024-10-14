function solution(nums) {
    const numSet = new Set(nums) // 중복을 제거한 집합
    const n = nums.length // 폰켓몬 총 수
    const k = n / 2 // 선택할 폰켓몬 수
    return Math.min(k, numSet.size) // 중복을 제거한 종류 수와 선택할 수 중 작은 값 반환
}