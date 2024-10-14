function solution(k, tragerine) {
    // 귤의 개수를 세는 counter 오브젝트 생성
    const counter = {}
    // 크기 t인 귤을 넣음
    for(const t of tragerine) {
        counter[t] = (counter[t] || 0) + 1
    }

    // 개수를 내림차순으로 정렬
    const sortedCounts = Object.values(counter).sort((a, b) => b - a)

    let numTypes = 0 // 현재까지 종류수
    let countSum = 0 // 현재까지 귤 개수 합

    for(const count of sortedCounts) {
        countSum += count
        numTypes += 1

        // 귤 개수 합이 k 이상이 되는 순간 종료
        if(countSum >= k) {
            break
        }
    }

    return numTypes
}