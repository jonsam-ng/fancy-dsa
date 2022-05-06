function cycleSort(seq) {
	const len = seq.length;

	// do cycle
	function run(i, v) {
		let p = i;
		// scan for shift position
		for (let j = i + 1; j < len; j++) {
			if (seq[j] < v) p++;
		}
		// place
		if (p !== i) {
			while (seq[p] === v) p++;
			const next = seq[p];
			seq[p] = v;
			run(i, next);
		} else seq[i] = v;
	}
	// cycles
	for (let i = 0; i < len - 1; i++) run(i, seq[i]);

	return seq;
}

console.time("sort");
console.log(cycleSort([2, 4, 8, 4, 10, 1, 3, 3, 19]));
// sort: 267.265ms
const arr = cycleSort(
	new Array(10000000).fill().map((x) => ~~(Math.random() * 1000))
);
console.log("==>", { arr });
console.timeEnd("sort");

module.exports = cycleSort;
