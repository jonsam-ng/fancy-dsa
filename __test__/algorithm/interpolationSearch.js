function interpolationSearch(seq, x, low = 0, high = seq.length - 1) {
	while (low <= high && x >= seq[low] && x <= seq[high]) {
		const mid =
			low + ~~(((x - seq[low]) * (high - low)) / (seq[high] - seq[low]));
		if (x === mid) return mid;
		if (x > mid) low = mid + 1;
		else high = mid - 1;
	}
	return -1;
}

const seq = Array.from(Array(100000).keys());
console.time("search");
console.log(interpolationSearch(seq, 10));
console.timeEnd("search");
