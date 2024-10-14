// 모의 테스트 수포자
function solution(answers) {
    // 수포자들의 패턴
    const patterns = [
        [1, 2, 3, 4, 5], // 1번 패턴
        [2, 1, 2, 3, 2, 4, 2, 5], // 2번 패턴
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5] // 3번 패턴
    ]

    // 수포자들의 점수를 저장할 배열
    const scores = [0, 0, 0];

    // 각 수포자의 패턴과 정답이 얼마나 일치하는지 확인
    for(const [i, answer] of answers.entries()) {
        for(const [j, pattern] of patterns.entries()) {
            if(answer === pattern[i % pattern.length]) { // 패턴의 길이가 더 긴 경우 처음으로
                scores[j] += 1;
            }
        }
    }

    // 가장 높은 점수 저장
    const maxScore = Math.max(...scores);

    // 가장 높은 점수를 받은 수포자들의 번호를 찾아서 배열에 담음
    const highestScore = [];
    for (let i = 0; i < scores.length; i++) {
        if(scores[i] > maxScore) {
            highestScore.push(i + 1);
        }
    }

    return highestScore;
}