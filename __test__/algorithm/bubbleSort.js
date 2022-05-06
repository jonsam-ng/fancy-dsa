function bubbleSort(seq) {
	let swapped = true;
	// keep scanning if swapped
	while (swapped) {
		// we assume current scan not swapped
		swapped = false;
		// scan to bubble
		// we know swapped will be falsy, so one loop is enough
		for (let i = 0; i < seq.length - 1; i++) {
			// swap
			if (seq[i] > seq[i + 1]) {
				[seq[i], seq[i + 1]] = [seq[i + 1], seq[i]];
				// once swapped, assume failed
				swapped = true;
			}
		}
	}
	return seq;
}

// console.time("sort");
// console.log(bubbleSort([2, 4, 8, 4, 10, 1, 3, 3]));
// sort: 230.632ms
// bubbleSort(new Array(10000).fill().map((x) => Math.random() * 1000));
// console.timeEnd("sort");

module.exports = bubbleSort;
