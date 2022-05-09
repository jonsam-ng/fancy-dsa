function pancakeSort(seq) {
	const len = seq.length;

	function findMax(size) {
		let maxIndex = 0;
		for (let i = 1; i <= size; i++) if (seq[i] > seq[maxIndex]) maxIndex = i;
		return maxIndex;
	}

	function flip(start, end) {
		while (start < end) {
			// keep swapping from both end
			[seq[start], seq[end]] = [seq[end], seq[start]];
			start++;
			end--;
		}
	}

	// flip from right to left
	for (let i = len - 1; i >= 0; i--) {
		const max = findMax(i);
		// flip left to max
		flip(0, max);
		// flip left to right
		flip(0, i);
	}

	return seq;
}

console.time("sort");
console.log(pancakeSort([2, 4, 8, 4, 10, 1, 3, 3]));
// sort: 187.31ms
const arr = pancakeSort(
	new Array(100000).fill().map((x) => ~~(Math.random() * 1000))
);
console.log("==>", { arr: arr.slice(100, 200) });
console.timeEnd("sort");

module.exports = pancakeSort;
