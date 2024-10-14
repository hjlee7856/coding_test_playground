function solution(topping) {
    // 결과 저장할 변수
    let splitCount = 0

    // 토핑의 개수 세어서 Map에 저장
    const toppingCounter = new Map()
    for(const t of topping) {
        toppingCounter.set(t, (toppingCounter.get(t) || 0) + 1)
    }

    // 절반에 속한 토핑의 종류를 저장할 Set
    const halfToppingSet = new Set()

    // 롤케이크를 하나씩 절반에 넣으면서 확인
    for(const t of topping) {
        // 절반에 토핑을 추가하고, 해당 토핑의 전체 개수를 줄임
        halfToppingSet.add(t)
        toppingCounter.set(t, toppingCounter.get(t) - 1)

        // 토핑의 전체 개수가 0이면 오브젝트에서 제거
        if(toppingCounter.get(t) === 0) {
            toppingCounter.delete(t)
        }

        // 토핑의 종류의 수가 같다면
        if(halfToppingSet.size === toppingCounter.size) {
            splitCount += 1
        }
    }

    // 공평하게 나눌 수 있는 방법의 수 반환
    return splitCount
}