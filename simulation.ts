function solution(s) {
    // x의 모든 0 제거
    // x의 길이를 c라고 하면 x를 c를 2진법으로 표현한 문자열
    // 1이 될 때까지 반복
    // 이진 변환 횟수와 제거된 0의 개수 반환

    // 이진 변환 횟수 저장
    let countTransform = 0
    // 제거된 모든 0의 개수 저장
    let countZero = 0

    // s가 '1'이 아닌 동안 반복
    while(s !== '1') {
        // 문자열을 배열로 변환
        s = s.split('')
        // 이진 변환 횟수를 1 증가
        countTransform += 1
        // s에서 '0'의 개수를 세어 countZero에 누적
        countZero += s.filter((c) => c === '0').length
        // s에서 '1'의 개수를 세고 이를 이진수로 변환
        s = s.filter((char) => char === '1').length.toString(2)
    }

    // 이진 변환 횟수와 제거된 0의 개수 반환
    return [countTransform, countZero]
}

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

function solution(n) {
    // 거리 n
    // 이동 1 순간이동 거리*2
    // 이동한 횟수
    return n
        .toString(2) // 2진수로 변환
        .splice('') // 문자열에서 배열로
        .filter((c) => c === '1') // 1만 필터링
        .length // 1의 개수를 반환
}