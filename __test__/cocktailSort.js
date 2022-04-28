function cocktailSort(seq) {
	let swapped = true,
		right = seq.length - 1,
		left = 0;

	function swap(i, reverse) {
		if (reverse && seq[i] < seq[i - 1]) {
			[seq[i], seq[i - 1]] = [seq[i - 1], seq[i]];
			swapped = true;
		}
		if (!reverse && seq[i] > seq[i + 1]) {
			[seq[i], seq[i + 1]] = [seq[i + 1], seq[i]];
			swapped = true;
		}
	}
	// keep scanning if swapped
	while (swapped) {
		// we assume no swap happened
		swapped = false;
		// scan from left to right
		for (let i = left; i < right; i++) swap(i, false);
		right--;
		// scan from right to left
		for (let i = right; i > left; i--) swap(i, true);
		left++;
	}

	return seq;
}

console.time("sort");
console.log(cocktailSort([2, 4, 8, 4, 10, 1, 3, 3, 19]));
// sort: 481.915ms
const arr = cocktailSort(
	new Array(10000).fill().map((x) => ~~(Math.random() * 1000))
);
console.log("==>", { arr });
console.timeEnd("sort");

module.exports = cocktailSort;
