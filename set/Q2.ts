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