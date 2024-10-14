function dfs(computers, visited, node) {
    // 현재 노드 방문 처리
    visited[node] = true

    for(let idx = 0; idx < computers[node].length; idx++){
        // 연결되어 있으며 방문하지 않은 노드라면
        if(computers[node][idx] && !visited[idx]) {
            // 해당 노드를 방문하러 이동
            dfs(computers, visited, idx)
        }
    }
}

function solution(n, computers) {
    let answer = 0
    // 방문 여부를 저장하는 배열
    const visited = Array(n).fill(false)
    for(let i = 0; i < n; i++) {
        // 아직 방문하지 않은 노드라면
        if(!visited[i]) {
            // DFS로 연결된 노드들을 모두 방문하면서 네트워크 개수 증가
            dfs(computers, visited, i)
            answer++
        }
    }
    return answer
}

