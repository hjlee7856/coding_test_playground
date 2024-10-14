class Queue {
    items = []
    front = 0
    rear = 0

    push(item) {
        this.items.push(item)
        this.rear++
    }

    size() {
        return this.rear - this.front
    }

    pop() {
        return this.items[this.front++]
    }
}

function solution(N, K) {
    // N명의 사람이 원 형태로 서있고
    // K 번째 사람을 없애고 그 사람을 기준으로 K 번째 사람을 없앰
    // 마지막에 살아있는 사람 반환

    // 1. 첫 번째부터 마지막까지 큐에 푸시
    // 2. 큐에서 k - 1 번째까지 각각 front에서 팝하고 rear에 푸시
    // 3. k 번째 데이터를 팝하고 출력
    // 4. 큐에 원소가 없을 때까지 반복
    const queue = new Queue()

    // 1부터 N까지의 번호를 deque에 추가
    for(let i = 1; i<= N; i++) {
        queue.push(i)
    }

    while(queue.size() > 1) {
        // queue에 하나가 남을때까지
        for(let i = 1; i < K - 1; i++) {
            queue.push(queue.pop()) // k번째를 찾기 위해
            // 앞에서부터 제거하고 뒤에 추가
        }
        queue.pop()
    }

    return queue.pop()
}