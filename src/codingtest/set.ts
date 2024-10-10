function solution(nums) {
    const numSet = new Set(nums) // 중복을 제거한 집합
    const n = nums.length // 폰켓몬 총 수
    const k = n / 2 // 선택할 폰켓몬 수
    return Math.min(k, numSet.size) // 중복을 제거한 종류 수와 선택할 수 중 작은 값 반환
}

function solution(n, words) {
    useWords = new Set() // 이미 사용한 단어를 저장
    prevWord = words[0][0] // 이전 단어의 마지막 글자
    for(i = 0; i< words.length; i++) {
        word = words[i]
        // 이미 사용한 단어거나 첫 글짜가 이전 단어와 일치하지 않으면
        if(useWords.has(word) || word[0] != preWord){
            // 탈락하는 사람의 번호와 차례를 반환
            return [i % n + 1, Math.floor(i / n) + 1]
        }
        useWords.add(word) // 사용한 단어로 추가
        preWord = word.slice(-1) // 이전 단어의 마지막 글자 업데이트
    }
    return [0, 0] // 모두 통과했을 경우 반환
}

function solution(phone_book) {
    phone_book.sort() // 정렬
    // 전화번호부에서 연속된 두 개의 전화번호 비교
    for(let i = 0; i < phone_book.length - 1; i++) {
        if(phone_book[i + 1].startsWith(phone_book[i])){
            return false
        }
    }
    // 모든 전화번호를 비교한 후에도 없으면 접두어가 없는 경우
    return true
}