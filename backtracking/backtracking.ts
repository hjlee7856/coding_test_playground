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

// 백트래킹을 위한 DFS
function dfs(curk, cnt, dungeons, visited) {
    let answerMax = cnt
    // 현재 피로도가 i번째 던전의 최소 필요 피로도보다 크거나 같고
    // i번째 던전을 방문한 적이 없다면
    for(let i = 0; i < dungeons.length; i++) {
        if(curk >= dungeons[i][0] && visited[i] === 0) {
            visited[i] = 1
            // 현재까지 최대 탐험 가능 던전 수와
            // i번째 던전에서 이동할 수 있는 최대 탐험 가능 던전 수 중 큰 값을 선택하여 업데이트
            answerMax = Math.max(answerMax, dfs(curk - dungeons[i][1], cnt + 1, dungeons, visited))
            visited[i] = 0
        }
    }
    return answerMax
}

// 최대 탐험 가능 던전 수를 계산하는 함수
function solution(k, dungeons) {
    // 방문 여부를 저장할 지역 배열
    const visited = Array(dungeons.length).fill(0)
    const answerMax = dfs(k, 0, dungeons, visited)
    return answerMax
}