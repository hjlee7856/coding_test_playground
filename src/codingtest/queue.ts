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

function solution(progresses, speeds) {
    const answer = []
    const n = progresses.length
    // 각 작업의 배포 가능일 계산
    const daysLeft = progresses.map((progress, index) => Math.ceil((100 - progress) / speeds[index]))

    let count = 0 // 배포될 작업의 수 카운트
    let maxDay = daysLeft[0] // 현재 배포될 작업 중 가장 늦게 배포될 작업의 가능일
    for(let i = 0; i < n; i++) {
        if(daysLeft[i] <= maxDay) { // 배포 가능일이 가장 늦은 배포일 보다 빠르면
            count++
        } else { // 배포 예정일이 기준 배포일보다 느리면
            answer.push(count);
            count = 1
            maxDay = daysLeft[i]
        }
    }
    answer.push(count) // 마지막으로 카운트된 작업들 함께 배포
    return answer
}

class Queue {
    items = []
    front = 0
    rear = 0

    // 생성자로 초기화
    constructor(array) {
        this.items = array
        this.rear = array.length
    }

    push(item) {
        this.items.push(item)
        this.rear++
    }

    pop() {
        return this.items[this.front++]
    }

    // front에 해당하는 값 반환
    first() {
        return this.items[this.front]
    }

    isEmpty() {
        return this.front === this.rear
    }
}

function solution(cards1, cards2, goal) {
    // 단어들을 사용해 원하는 순서의 배열 가능인지
    // cards와 goal을 Queue로 변환
    cards1 = new Queue(cards1)
    cards2 = new Queue(cards2)
    goal = new Queue(goal)

    // goal의 문자열을 순차적으로 순회
    while (!goal.isEmpty()) {
        // card1의 front와 일치하는 경우
        if(!cards1.isEmpty() && cards1.first() === goal.first()) {
            cards1.pop()
            goal.pop()
            // card2의 front와 일치하는 경우
        } else if(!cards2.isEmpty() && cards2.first() === goal.first()) {
            cards2.pop()
            goal.pop()
        } else {
            break
        }
    }

    return goal.isEmpty() ? "Yes" : "NO"
}