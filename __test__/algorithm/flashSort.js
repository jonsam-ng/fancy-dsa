const bubbleSort = require("./bubbleSort");
const log = console.log;

function computeMinAndMax(seq) {
	let min = 0,
		max = 0;
	for (let i = 0; i < seq.length; i++) {
		if (seq[i] < min) min = seq[i];
		if (seq[i] > max) max = seq[i];
	}
	return [min, max];
}

function flashSort(seq) {
	const len = seq.length,
		mRate = 0.45,
		m = ~~(len * mRate),
		buckets = new Array(m).fill().map((x) => []);
	const [min, max] = computeMinAndMax(seq);

	// compute k value
	function computeK(i) {
		return ~~(((m - 1) * (seq[i] - min)) / (max - min));
	}

	// fill buckets
	for (let i = 0; i < len; i++) buckets[computeK(i)].push(seq[i]);

	// sort buckets
	for (let i = 0; i < m; i++) bubbleSort(buckets[i]);
	return buckets.flat();
}

console.time("sort");
console.log(flashSort([2, 4, 8, 4, 10, 1, 3, 3]));
// 1w: sort: 13.639ms; 10w: 46.531ms; 100W: 407.97ms; 1KW: 3.555s; 10KW: Last few GCs
const arr = flashSort(
	new Array(100000000).fill().map((x) => ~~(Math.random() * 1000))
);
console.log("==>", { arr: arr.slice(100, 200) });
console.timeEnd("sort");

module.exports = flashSort;
