function beadSort(seq) {
	// we expect seq to be positive
	if (seq.some((x) => x < 0)) {
		console.error("Seq must be positive!");
		return;
	}

	const rowLen = seq.length;
	const colLen = Math.max(...seq);
	const holder = "*";

	// init grad base on seq
	const grid = seq.map((x) => {
		const row = new Array(colLen);
		// fill row with holder
		for (let i = 0; i < x; i++) row[i] = holder;
		return row;
	});

	// drop the grid
	for (let j = 0; j < colLen; j++) {
		// count bead of column
		let count = 0;
		for (let i = 0; i < rowLen; i++) grid[i][j] === holder && count++;
		// drop the beads
		for (let i = rowLen - 1; i >= 0; i--)
			count ? ((grid[i][j] = holder), count--) : (grid[i][j] = undefined);
	}

	// output
	return grid.map((row) => row.filter((x) => x === holder).length);
}

console.time("sort");
console.log(beadSort([2, 4, 8, 4, 10, 1, 3, 3]));
// Maximum call stack size exceeded
beadSort(new Array(100000000).fill(Math.random()));
console.timeEnd("sort");

module.exports = beadSort;
