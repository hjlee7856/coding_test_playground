function solution(N) {
    // 조합 결과를 담을 배열
    const results = []

    // 유망 함수
    function backtrack(sum, selectedNums, start) {
        if(sum === 10) {
            results.push(selectedNums)
            return
        }

        // 다음에 선택할 수 있는 숫자들을 하나씩 선택하면서
        for(let i = start; i <= N; i++) {
            // 선택한 숫자의 합이 10보다 작거나 같으면
            if(sum + i <= 10) {
                // 백트래킹 함수를 재귀적으로 호출
                backtrack(sum + i, selectedNums.concat(i), i + 1)
            }
        }
    }

    // 백트래킹 함수 호출
    backtrack(0, [], 1)
    // 조합 결과 반환
    return results
}