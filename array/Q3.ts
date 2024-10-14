// 모의 테스트 두개 뽑아서 더하기
function solution(numbers) {
    const result = []

    for (let i = 0; i < numbers.length; i++) { // 현재 인덱스에서
        for(let j = 0; j < i; j++) { // 다른 인덱스 값 더한거 모두 넣음
            result.push(numbers[i] + numbers[j]);
        }
    }

    return [...new Set(result)].sort((a, b) => a - b);
}