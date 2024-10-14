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