/**
 * @desc 9x9 sudoku problem
 */
function sudoku(grid) {
	const size = grid.length;

	function getNextEmptyCell() {
		// start scan from last read
		for (let i = 0; i < size; i++) {
			for (let j = 0; j < size; j++) {
				if (grid[i][j] === 0) return [i, j];
			}
		}
		return [-1, -1];
	}

	function check([x, y], n) {
		// check for roes and columns
		for (let i = 0; i < size; i++) {
			if (grid[x][i] === n) return false;
			if (grid[i][y] === n) return false;
		}
		// check for 3x3 grid
		const [sx, sy] = [x, y].map((x) => ((x / 3) | 0) * 3);
		for (let i = sx; i < sx + 3; i++) {
			for (let j = sy; j < sy + 3; j++) {
				if (grid[i][j] === n) return false;
			}
		}

		return true;
	}

	function resolve() {
		// get next empty cell
		const [x, y] = getNextEmptyCell();
		// check for completion, if no empty cells left
		if (x === -1 && y === -1) return true;
		// try to fill in current cell
		for (let i = 1; i < size + 1; i++) {
			if (check([x, y], i)) {
				grid[x][y] = i;
				// try to fill in next cells
				if (resolve()) return true;
				// if failed in next steps, backtracking
				grid[x][y] = 0;
			}
		}
		return false;
	}
	const found = resolve();

	return found ? grid : false;
}

function printGrid(grid) {
	console.log(
		grid.reduce((prev, r) => ((prev += r.join("\t") + "\n"), prev), "")
	);
}

const grid = [
	[3, 0, 6, 5, 0, 8, 4, 0, 0],
	[5, 2, 0, 0, 0, 0, 0, 0, 0],
	[0, 8, 7, 0, 0, 0, 0, 3, 1],
	[0, 0, 3, 0, 1, 0, 0, 8, 0],
	[9, 0, 0, 8, 6, 3, 0, 0, 5],
	[0, 5, 0, 0, 9, 0, 6, 0, 0],
	[1, 3, 0, 0, 0, 0, 2, 5, 0],
	[0, 0, 0, 0, 0, 0, 0, 7, 4],
	[0, 0, 5, 2, 0, 6, 3, 0, 0],
];

sudoku(grid);

printGrid(grid);

// output
// 3	1	6	5	7	8	4	9	2
// 5	2	9	1	3	4	7	6	8
// 4	8	7	6	2	9	5	3	1
// 2	6	3	4	1	5	9	8	7
// 9	7	4	8	6	3	1	2	5
// 8	5	1	7	9	2	6	4	3
// 1	3	8	9	4	7	2	5	6
// 6	9	2	3	5	1	8	7	4
// 7	4	5	2	8	6	3	1	9
