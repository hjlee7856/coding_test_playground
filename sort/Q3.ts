function solution(array, commands) {
    // i부터 j까지 자르고 정렬하고 k번째 수를 찾음
    const answer = []
    for(const command of commands) {
        const [i, j, k] = command
        // i부터 j까지 자르기
        const sliced = array.slice(i - 1, j)
        // 자른 배열을 정렬하기
        sliced.sort((a, b) => a - b)
        // k번째 원소 구하기
        answer.push(sliced[k - 1])
    }
    return answer
}