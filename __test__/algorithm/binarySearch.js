function binarySearchRecursive(seq, x, low = 0, high = seq.length - 1) {
	if (low > high) return -1;
	const mid = ~~((low + high) / 2);
	if (x === seq[mid]) return mid;
	if (x > seq[mid]) return binarySearchRecursive(seq, x, mid + 1, high);
	else return binarySearchRecursive(seq, x, low, mid - 1);
}

function binarySearchIterative(seq, x, low = 0, high = seq.length) {
	while (low <= high) {
		const mid = (low + high) >> 1;
		if (x === seq[mid]) return mid;
		if (x > seq[mid]) low = mid + 1;
		else high = mid - 1;
	}
	return -1;
}

// cache computation
const seq = [...Array(100000000).keys()];
// console.log(binarySearchRecursive(seq, 10));
console.time("search");
console.log(binarySearchIterative(seq, 30));
console.timeEnd("search");
