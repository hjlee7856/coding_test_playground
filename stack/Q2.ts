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