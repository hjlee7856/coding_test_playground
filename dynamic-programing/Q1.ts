function solution(n) {
    // 2이상 n이 입력되었을 때 n번째 피보나치 수를 1234567로 나눈 나머지 반환
    const fib = [0, 1] // fib(0) = 0, fib(1) = 1
    for(let i = 2; i <= n; i++){
        // 메모이제이션하여 나눈값을 저장함
        fib.push((fib[i - 1] + fib[i - 2]) % 1234567)
    }
    return fib[n]
}