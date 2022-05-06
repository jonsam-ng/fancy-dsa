function combSort(seq) {
	const shrink = 1.3,
		len = seq.length;
	let gap = len,
		swapped = true,
		left = 0,
		right = len - 1,
		count = 0,
		flag = false;

	function boundCheck(i) {
		return Math.max(0, Math.min(i, len));
	}

	function swap(i, gap, reverse) {
		function run(i, j) {
			[seq[i], seq[j]] = [seq[j], seq[i]];
			swapped = true;
		}
		if (reverse) {
			const j = boundCheck(i - gap);
			seq[j] > seq[i] && run(i, j);
		} else {
			const j = boundCheck(i + gap);
			seq[j] < seq[i] && run(i, j);
		}
	}

	function gapTuner(gap) {
		// combSort-11
		if ([9, 10].includes(gap) && len >= 11) return 11;
		return gap;
	}

	function dualSwap(gap = 1) {
		// scan from left to right
		for (let i = left; i < right; i++) swap(i, gap, false);
		right--;
		// scan from right to left
		for (let i = right; i > left; i--) swap(i, gap, true);
		left++;
	}

	// keep scanning if swapped, use cocktail sort inner
	while (swapped) {
		// assume not swap on current scan
		swapped = false;

		if (gap > 1) {
			// update gap before comb, gap cannot less than 1
			gap = gapTuner(~~(gap / shrink));
			dualSwap(gap);
		} else {
			if (!flag) {
				flag = true;
				left = 0;
				right = len;
			}
			// if gap < 1, tune the order
			dualSwap(gap);
		}

		count++;
		console.log("==>", { gap, swapped, count });
	}

	return seq;
}

console.time("sort");
console.log(combSort([2, 4, 8, 4, 10, 1, 3, 3, 19]));
// 1w: sort: 37.875ms 10w: sort: 153.362ms 100w: 1.498s 1kw: 14.329s
// gap: 86 → 66 → 50 → 38 → 29 → 22 → 16 → 12 → 11 → 8 → 6 → 4 → 3 → 2 → 1
const arr = combSort(
	new Array(10000000).fill().map((x) => ~~(Math.random() * 100000))
);
// sort: 190.074ms
console.log("==>", { arr: arr.splice(100, 200) });
console.timeEnd("sort");

module.exports = combSort;
