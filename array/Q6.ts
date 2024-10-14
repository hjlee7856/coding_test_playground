function isValidMove(nx, ny) {
    // 좌표평면을 벗어나는지 체크하는 함수
    return nx >= -5 && nx <= 5 && ny >= -5 && ny <= 5;
}

function updateLocation(x, y, dir) {
    switch (dir) {
        case "U":
            return [x, y + 1]
        case "D":
            return [x, y - 1]
        case "R":
            return [x + 1, y]
        case "L":
            return [x - 1, y]
    }
}

function solution(dirs) {
    let x = 0;
    let y = 0;
    const visited = new Set(); // 겹치는 좌표는 1개로 처리
    for(const dir of dirs) {
        const [nx, ny] = updateLocation(x, y, dir);
        if(!isValidMove(nx, ny)) {
            continue;
        }
        // A에서 B로 간 경우 B에서 A도 추가(총 경로의 개수는 방향성이 없음)
        visited.add(`${x}${y}${nx}${ny}`)
        visited.add(`${nx}${ny}${x}${y}`)
            [x, y] = [nx, ny] // 좌표를 이동했으므로 업데이트
    }
    return visited.size / 2;
}