function solution(genres, plays) {
    let answer = []
    const genreObj = {}
    const playObj = {}

    // 장르별 총 재생 횟수와 각 곡의 재생 횟수 저장
    for(let i = 0; i < genres.length; i++) {
        let genre = genres[i];
        let play = plays[i]

        if(!(genre in genreObj)) {
            genreObj[genre] = []
            playObj[genre] = 0
        }

        genreObj[genre].push([i, play])
        playObj[genre] += play
    }

    // 총 재생 횟수가 많은 장르순으로 정렬
    let sortedGenres = Object.keys(playObj).sort((a,b) => {
        return playObj[b] - playObj[a]
    })

    // 각 장르 내에서 노래를 재생 횟수 순으로 정렬해 최대 2곡 선택
    for(const genre of sortedGenres) {
        let sortedSongs = genreObj[genre].sort((a, b) => {
            // 재생횟수가 같으면 고유번호 낮은순(오름차)
            return a[1] === b[1] ? a[0] - b[0] : b[1] - a[1]
        })
        answer.push(...sortedSongs.slice(0, 2).map((song) => song[0]))
    }

    return answer
}