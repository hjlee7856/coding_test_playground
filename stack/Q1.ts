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