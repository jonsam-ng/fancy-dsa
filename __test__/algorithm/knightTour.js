// 0 means that cell haven's been visit
function createBoard(size) {
	return new Array(size).fill(0).map((row) => new Array(size).fill(0));
}

/**
 * @desc Find an open knight tour path of given size
 */
function knightTour(size, close = false) {
	// init board
	if (typeof size !== "number" || size < 1) {
		console.error("Invalid board size");
		return;
	}
	let board = createBoard(size);
	let steps = [];
	let stepBoard = createBoard(size);
	let step = 1;
	const cb = (cell) => {
		const [x, y] = cell;
		stepBoard[x][y] = step++;
		steps.push(cell);
	};

	function reset() {
		board = createBoard(size);
		steps = [];
		stepBoard = createBoard(size);
		step = 1;
	}

	function set(cell, visited) {
		const [x, y] = cell;
		board[x][y] = +visited;
	}

	function isComplete() {
		return !board.map((r) => r.includes(0)).includes(true);
	}

	function inBound(cell) {
		return cell.every((x) => x >= 0 && x <= size - 1);
	}

	function isVisited(cell) {
		const [x, y] = cell;
		return board[x][y] === 1;
	}

	function nextSteps(cell) {
		const [x, y] = cell;
		return [
			[x + 2, y + 1],
			[x + 2, y - 1],
			[x - 2, y + 1],
			[x - 2, y - 1],
			[x + 1, y + 2],
			[x + 1, y - 2],
			[x - 1, y + 2],
			[x - 1, y - 2],
		].filter((cell) => inBound(cell));
	}

	function move(cell) {
		return nextSteps(cell).filter((cell) => !isVisited(cell));
	}

	function canMoveTo(from, to) {
		return nextSteps(from).some(([x, y]) => x === to[0] && y === to[1]);
	}

	/**
	 * Find next path by special cell recursively
	 */
	function resolve(current) {
		// we are going to visit current cell, so set cell to 1
		set(current, true);
		// check if we finish board visit by current snapshot
		if (isComplete()) {
			cb(current);
			return true;
		}
		// we will continue to visit next cells that can be visited
		const next = move(current);
		for (const cell of next) {
			if (resolve(cell)) {
				// that means an open path can be find via current cell
				cb(current);
				return true;
			}
		}
		// cannot complete tour from current, backtracking
		set(current, false);
		return false;
	}

	// find open knight path
	for (let i = 0; i < size; i++) {
		for (let j = 0; j < size; j++) {
			// if we find one, return snapshot of board
			if (resolve([i, j])) {
				if (close) {
					if (canMoveTo(steps[0], steps[steps.length - 1]))
						return { board, steps, stepBoard };
					else reset();
				} else {
					return { board, steps, stepBoard };
				}
			}
		}
	}

	// we cannot find any path
	return false;
}

function printBoard(board) {
	const table = board.reduce(
		(prev, r) => (
			(prev += r.map((c) => (c < 10 ? ` ${c}` : c)).join("\t") + "\n"), prev
		),
		""
	);
	console.log(table);
}

// Cull和Conrad证明了对于任何一个m×n（5<=m<=n）棋盘，至少有一个（可能是开巡逻）骑士巡逻路径。

// Schwenk证明了，除了以下3种情况外，任何的m×n（m<=n）棋盘都至少有1个闭巡逻。
// m和n都为奇数
// m= 1, 2, 4
// m= 3且n= 4, 6, 8

const size = 6;
const { board, steps, stepBoard } = knightTour(size, true);
if (board) {
	printBoard(board);
	console.log("=======");
	printBoard(stepBoard);
}

// 开路径：

// 36	25	16	 9	30	27
// 15	 8	29	26	17	10
// 24	35	14	33	28	31
//  7	 2	 5	20	11	18
//  4	23	34	13	32	21
//  1	 6	 3	22	19	12

// 闭路径：

// 30	11	36	19	32	13
//  1	20	31	12	 3	18
// 10	29	 2	35	14	33
// 21	26	23	 6	17	 4
// 24	 9	28	15	34	 7
// 27	22	25	 8	 5	16
