
function stack() {
    const stack = [] // 스택 초기화
    const maxSize = 10 // 스택의 최대 크기

    function isFull(stack) {
        // 스택이 가득찼는지 확인
        return stack.length === maxSize
    }

    function isEmpty(stack) {
        // 스택이 비어있는지 확인
        return stack.length === 0
    }

    function push(stack, item) {
        if(isEmpty(stack)) {
            console.log('스택이 가득 찼습니다.')
        } else {
            stack.push(item)
            console.log('데이터가 추가되었습니다.')
        }
    }

    function pop(stack) {
        if(isEmpty(stack)) {
            console.log('스택이 비어 있습니다')
            return null
        } else {
            return stack.pop()
        }
    }
}

function stackInJS() {
    // 배열을 동적으로 관리하므로 maxsize나 isfull은 구현할 필요가 없음
    // isEmpty는 stack.length로 검사
    const stack = []

    function push(stack, item) {
        stack.push(item)
    }

    function pop(stack) {
        if(stack.length === 0) return null
        return stack.pop()
    }
}

function solution(s) {
    // "("와 ")"이 있을때 짝이 다 맞춰지는지 확인
    // 맞으면 true 아니면 false
    const stack = [] // 스택 초기화

    for(const c of s) {
        if(c === "(") { // "("이면 넣음
            stack.push(c)
        } else if(c === ")") { // ")"일때
            if(stack.length === 0) { // 다 비어있으면 false
                return false
            } else {
                stack.pop() // 짝이 맞으므로 pop
            }
        }
    }

    return stack.length === 0 // 다끝났을때 비어있으면 true
}

function solution(decimal) {
    // 10진수를 2진수로 바꾸기
    const stack = []
    // 몫이 0이 아니라면 나머지를 버리고 다시 수행
    while(decimal > 0) {
        const remainer = decimal % 2
        // 10진수를 2로 나눈 나머지를 저장하고 나눔
        stack.push(remainer)
        decimal = Math.floor(remainer / 2)
    }
    let binary = ""
    while(stack.length > 0) {
        // 모든 과정이 끝나고 1에서 저장한 수를 뒤부터 가져와서 붙이기
        binary += stack.pop()
    }
}

function solution(s) {
    // "()", "[]", "{}"은 올바른 괄호 문자열
    // x칸 만큼 회전했을때 올바른 문자열이 되게하는 x의 개수 반환
    // s를 왼쪽으로 x칸 만큼 회전, 올바른 괄호 문자열?
    const n = s.length
    let answer = 0

    for(let i = 0; i < n; i++) {
        const stack = []
        let isCorrect = true
        for(let j = 0; j < n; j++) {

            // 문자열을 회전시키면서 참조
            const c = s[(i + j) % n]

            // 열린 괄호는 푸시
            if(c === '[' || c === '(' || c === '{') {
                stack.push(c)
            } else {
                if(stack.length === 0) {
                    // 여는 괄호가 없는 경우
                    isCorrect = false
                    break;
                }
            }

            // 닫힌 괄호는 스택의 top과 짝이 맞는지 비교
            const top = stack[stack.length - 1];
            if(c === "]" && top === "[") {
                stack.pop()
            } else if(c === ")" && top === "(") {
                stack.pop()
            } else if(c === "}" && top === "{") {
                stack.pop()
            } else {
                isCorrect = false
                break;
            }
        }

        // 모든 괄호의 짝이 맞는 경우
        if(isCorrect && stack.length === 0) {
            answer += 1
        }
    }

    return answer
}

function solution(s) {
    // 문자열이 주어졌을때 짝을 찾아서 제거함
    // 모두 제거하면 종료
    // 성공적으로 수행 할 수있는지 반환 성공 1 실패 0
    // baabaa -> bbaa -> aa -> 성공
    const stack = []
    for (const c of s) {
        // 스택이 비어 있지 않고, 현재 문자와 스택의 맨위 문자가 같으면
        if(stack.length > 0 && stack[stack.length - 1] === c) {
            // 스택의 맨 위 문자 제거
            stack.pop()
        } else {
            // 스택에 현재 문자 추가
            stack.push(c)
        }
    }
    // 스택이 비어 있으면 1, 아니면 0
    return stack.length === 0 ? 1 : 0
}

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
    const answer = 0

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