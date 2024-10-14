
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