function oddEvenSort(seq) {
	const len = seq.length;
	let swapped = true;
	// keep scanning if swapped happened
	function swap(i, j) {
		if (seq[j] < seq[i]) {
			[seq[i], seq[j]] = [seq[j], seq[i]];
			swapped = true;
		}
	}
	while (swapped) {
		// we assume swapped will not happen on current scanning
		swapped = false;
		// old scanning
		for (let i = 0; i < len; i += 2) {
			swap(i, i + 1);
		}
		// even scanning
		for (let i = 1; i < len; i += 2) {
			swap(i, i + 1);
		}
	}
	return seq;
}

console.time("sort");
console.log(oddEvenSort([2, 4, 8, 4, 10, 1, 3, 3]));
// sort: 297.832ms
const arr = oddEvenSort(
	new Array(10000).fill().map((x) => ~~(Math.random() * 1000))
);
console.log("==>", { arr: arr.slice(100, 200) });
console.timeEnd("sort");

module.exports = oddEvenSort;
