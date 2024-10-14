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