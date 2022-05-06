function countingSort(seq) {
	// init freq buckets
	const len = seq.length,
		C = new Array(len).fill(0),
		D = [];
	seq.forEach((x) => C[x]++);

	// fill D from buckets
	for (let i = 0; i < len; i++) {
		if (!C[i]) continue;
		while (C[i]) {
			D.push(i);
			C[i]--;
		}
	}
	return D;
}

function countingSortByPopulate(seq) {
	const len = seq.length,
		min = Math.min(...seq),
		max = Math.max(...seq),
		cLen = max - min + 1,
		C = new Array(cLen).fill(0),
		D = [];
	// init freq arr
	seq.forEach((x) => C[x - min]++);

	// populate
	C[0] -= 1;
	for (let i = 1; i < cLen; i++) C[i] += C[i - 1];
	for (let i = len - 1; i >= 0; i--) {
		D[C[seq[i] - min]] = seq[i];
		C[seq[i] - min]--;
	}
	return D;
}

const arr = [11, 9, 6, 8, 1, 3, 5, 1, 1, 0, 100];
console.log(countingSortByPopulate(arr));

module.exports = countingSort;
