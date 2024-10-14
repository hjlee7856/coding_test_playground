function solution(n) {
    // 바닥의 가로 길이가 1인 경우
    if(n === 1) {
        return 1
    }

    // 바닥의 가로 길이가 2인 경우
    if(n === 2) {
        return 2
    }

    // 동적 계획법을 위한 배열
    // dp[i]는 가로 길이가 i일 때 바닥을 채우는 방법의 수
    const dp = Array(n + 1).fill(0)
    dp[1] = 1
    dp[2] = 2

    // 가로의 길이가 3부터 n까지의 각각의 경우에 대해 바닥을 채우는 방법의 수
    for(let i = 3; i <= n; i++){
        // dp[i]는 dp[i - 1]과 dp[i - 2]를 더한 값
        dp[i] = (dp[i - 1] + dp[i - 2]) % 1000000007
    }

    // 바닥의 가로 길이가 n일 때 바닥을 채우는 방법의 수 dp[n] 반환
    return dp[n]
}
