function solution(amount) {
    // 최소한의 개수로 주는 방법
    const denominations = [1, 10, 50, 100]
    denominations.sort((a, b) => b - a) // 큰 순서대로 정렬

    const change = [] // 거스름돈

    for(const coin of denominations) {
        while(amount >= coin) { // 해당 화폐 단위로 거스름돈을 나눠줌
            change.push(coin) // 거스름돈 배열 추가
            amount -= coin // 정산이 완료된 거스름돈 뺌
        }
    }

    return change
}

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