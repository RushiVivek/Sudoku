class Board {
    constructor() {
        this.board = new Array(9).fill().map(() => new Array(9).fill(0));
    }
    generate() {
        this.board = [[0, 3, 0, 4, 9, 0, 0, 1, 0], [7, 4, 0, 0, 1, 8, 0, 0, 0], [1, 9, 6, 7, 0, 0, 0, 2, 4], [0, 0, 0, 5, 0, 1, 7, 6 ,2], [0, 0, 3, 0, 2, 7, 0, 5, 9], [0, 0, 0, 0, 4, 0, 3, 0, 0], [0, 7, 8, 9, 0, 0, 0, 0, 0], [4, 2, 9, 0, 0, 0, 0, 7, 3], [0, 0, 0, 3, 7, 0, 0, 9, 8]]
    }
    isValid(num, pos) {
        let x = pos[0];
        let y = pos[1];
        let base_x = Math.floor(x/3);
        let base_y = Math.floor(y/3);

        this.board.forEach(row => {
            if (row[y] == num) {
                return false;
            }
        });
        this.board[x].forEach(i => {
            if (i == num) {
                return false;
            }
        });
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (this.board[base_x+i][base_y+j] == num) {
                    return false;
                }
            }
        }
        return true;
    }
    solve(pos) {
        let x = pos[0];
        let y = pos[1];

        for (let num = 1; num < 10; num++) {
            if (this.isValid(num, pos)) {
                this.board[x][y] = num;
                let zeropos = this.findZero();
                if (!zeropos) {
                    return true;
                }
                if (this.solve(zeropos)) {
                    return true;
                }
            }
        }
        return false;

    }
    isSolved() {
        this.board.forEach(row => {
            row.forEach(i => {
                if (i == 0) {
                    return false;
                }
            });
        });
        return true;
    }
    findZero() {
        for (let j = 0; j < 9; j++) {
            for (let i = 0; i < 9; i++) {
                if (this.board[j][i] == 0) {
                    return [j, i];
                }
            }
        }
        return false;
    }
}

let b = new Board();

b.generate();

b.solve([0, 0])

console.log(b.board);