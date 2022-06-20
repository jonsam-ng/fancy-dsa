function partition(seq, l, h) {
	const pivot = seq[h];
	let lowest = l;
	for (let i = l; i <= h - 1; i++) {
		if (seq[i] <= pivot) {
			[seq[i], seq[lowest]] = [seq[lowest], seq[i]];
			lowest++;
		}
	}
	[seq[h], seq[lowest]] = [seq[lowest], seq[h]];
	return lowest;
}

function quickSelectSearch(seq, k, l, h) {
	// if (l > h) return -1;
	const index = partition(seq, l, h),
		t = l + k - 1;
	console.log("==>", { seq, index, t, k, l, h });

	if (t === index) return seq[index];
	else if (t > index) quickSelectSearch(seq, t - index, index + 1, h);
	else quickSelectSearch(seq, k, l, index - 1);
}

// cache computation
const seq = [1, 3, 4, 6, 2, 7];
console.time("search");
console.log(quickSelectSearch(seq, 2, 0, seq.length - 1));
console.timeEnd("search");

module.exports = quickSelectSearch;
