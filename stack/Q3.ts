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