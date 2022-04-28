const bubbleSort = require("./bubbleSort");

function bucketSort(seq, size = 5) {
	if (!seq || !seq.length) {
		return [];
	}
	// find min and max for bucket number
	// The Math.min and Math.max most likely crash, or return NaN for big arrays (~10⁷)
	// see https://stackoverflow.com/questions/42623071/maximum-call-stack-size-exceeded-with-math-min-and-math-max
	// const min = Math.min(...seq);
	// const max = Math.max(...seq);
	let min = seq[0],
		max = seq[0];
	for (let i = 0; i < seq.length; i++) {
		const x = seq[i];
		x < min && (min = x);
		x > max && (max = x);
	}
	const bucketLen = ~~((max - min) / size) + 1;
	// create buckets
	const buckets = new Array(bucketLen).fill().map((x) => []);
	// put seq into buckets
	seq.forEach((x) => {
		const bucketIdx = ~~((x - min) / size);
		buckets[bucketIdx].push(x);
	});
	// sort buckets with bubbleSort
	buckets.map((bucket) => bubbleSort(bucket));
	return buckets.flat();
}

console.time("sort");
console.log(bucketSort([2, 4, 8, 4, 10, 1, 3, 3, 19]));
// with bubbleSort: sort: 2.255s
bucketSort(
	new Array(100000).fill().map((x) => Math.random() * 1000),
	100
);
console.timeEnd("sort");

module.exports = bucketSort;
