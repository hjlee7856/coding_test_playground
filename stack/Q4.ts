function solution(board, moves) {
    // 각 레인에서 moves에 해당 하는 인형 뽑아서 같으면 제거
    // 2차원 배열로 주어짐, 제거한 인형수 반환
    // 각 열에 대한 스택 생성
    const lanes = [...Array(board[0].length)].map(() => [])

    // board를 역순으로 탐색하며, 각 열의 인형을 lanes에 추가
    for(let i = board.length - 1; i >= 0; i--) {
        for(let j = 0; j < board[0].length; j++) {
            if(board[i][j]) {
                lanes[j].push(board[i][j]);
            }
        }
    }

    // 인형을 담을 변수
    const bucket = []

    // 사라진 인형의 총 개수
    let answer = 0

    // moves를 순회하며, 각 열에서 인형을 뽑아 bucket에 추가
    for (const m of moves) {
        if(lanes[m - 1].length > 0) {
            // 해당열에 인형이 있는 경우
            const doll = lanes[m - 1].pop()
            if(bucket.length > 0 && bucket[bucket.length - 1] === doll) {
                // 바구니에 인형이 있고, 가장 위에 있는 인형과 같은 경우
                bucket.push()
                answer += 2
            } else {
                // 바구니에 인형이 없거나, 가장 위에 있는 인형과 다른 경우
                bucket.push(doll)
            }
        }
    }
    return answer
}