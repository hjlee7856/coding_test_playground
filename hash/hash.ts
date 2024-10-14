function countsort(arr, k) {
    // 해시 테이블 생성 및 초기화
    const hashtable = new Array(k + 1).fill(0);
    for(const num of arr) {
        // 현재 원소의 값이 k 이하인 때만 처리
        if(num <= k) {
            // 현재 원소 값을 인덱스로 해 해당 인덱스의 해시 테이블 값을 1로 설정
            hashtable[num] = 1
        }
    }

    return hashtable
}

function solution(arr, target) {
    const hashtable = countsort(arr, target)
    for (const num of arr) {
        const complement = target - num
        // target에서 현재 원소를 뺀 값이 해시 테이블에 있는지 확인
        if (complement != num &&
            complement >= 0 &&
            complement <= target &&
            hashtable[complement] === 1) {
            return true
        }
    }
    return false
}

function solution(participant, completion){
    // 해시 테이블 생성
    const obj = {};

    // 참가자들의 이름을 해시 테이블에 추가
    for(const p of participant) {
        if(obj[p]) {
            obj[p] += 1
        } else {
            obj[p] = 1
        }
    }

    // 완주한 선수들의 이름을 키로 하는 값을 1씩 감소
    for(const c of completion) {
        obj[c] -= 1
    }

    // 해시 테이블에 남아 있는 선수가 완주하지 못한 선수
    for(const key in obj) {
        if(obj[key] > 0) {
            return key
        }
    }
}

function isShallowEqual(obj1, obj2) {
    const objKeys1 = Object.keys(obj1)
    const objKeys2 = Object.keys(obj2)

    if(objKeys1.length !== objKeys2.length) {
        return false
    }

    for(const key in objKeys1) {
        const value1 = objKeys1[key]
        const value2 = objKeys2[key]

        if(value1 !== value2) {
            return false
        }
    }

    return true
}

function solution(want, number, discount) {
    // want: 원하는 품목
    // number: 원하는 개수
    // discount: 날마다 할인 하는 품목
    // want 배열을 오브젝트로 변환
    const wantObj = {}
    for(let i = 0; i < want.length; i++) {
        wantObj[want[i]] = number[i]
    }

    let answer = 0 // 총 일수를 계산할 변수

    // 특정일 i에 회원가입 시 할인받을 수 있는 품목 체크
    // 10일간 쇼핑해야 하므로 - 9
    for(let i = 0; i < discount.length - 9; i++) {
        // i일 회원가입 시 할인받는 제품 및 개수를 담을 오브젝트
        const discount10d = {}

        // 10일간 discount에 해당되는 제품 순회
        // i일 회원가입 시 할인받는 제품 및 개수로 오브젝트 구성
        for(let j = i; j < i + 10; j++) {
            if(wantObj[discount[j]]) {
                // discount10d[discount[j]]가 비어 있다면 0으로 기본값 설정
                discount10d[discount[j]] = (discount10d[discount[j] || 0]) + 1
            }
        }

        // 할인하는 상품의 개수가 원하는 수량과 일치하면 정답에 1 추가
        if(isShallowEqual(discount10d, wantObj)) {
            answer += 1
        }
    }

    return answer
}

function solution(genres, plays) {
    let answer = []
    const genreObj = {}
    const playObj = {}

    // 장르별 총 재생 횟수와 각 곡의 재생 횟수 저장
    for(let i = 0; i < genres.length; i++) {
        genre = genres[i];
        play = plays[i]

        if(!(genre in genreObj)) {
            genreObj[genre] = []
            playObj[genre] = 0
        }

        genreObj[genre].push([i, play])
        playObj[genre] += play
    }

    // 총 재생 횟수가 많은 장르순으로 정렬
    sortedGenres = Object.keys(playObj).sort((a,b) => {
        return playObj[b] - playObj[a]
    })

    // 각 장르 내에서 노래를 재생 횟수 순으로 정렬해 최대 2곡 선택
    for(const genre of sortedGenres) {
        sortedSongs = genreObj[genre].sort((a, b) => {
            // 재생횟수가 같으면 고유번호 낮은순(오름차)
            return a[1] === b[1] ? a[0] - b[0] : b[1] - a[1]
        })
        answer.push(...sortedSongs.slice(0, 2).map((song) => song[0]))
    }

    return answer
}