function radixSort(seq, radix = 10) {
	if (!seq || !Array.isArray(seq) || seq.length < 2) return seq;
	if (seq.some((x) => x < 0)) {
		console.warn("Radix sort sequence must be positive.");
		return seq;
	}
	const initBuckets = () => new Array(radix).fill().map((x) => []);
	const len = seq.length;
	let p = 1,
		sorted = false;

	while (!sorted) {
		const buckets = initBuckets();
		sorted = true;
		// scan and putting to buckets
		for (let i = 0; i < len; i++) {
			const x = ~~(seq[i] / p);
			buckets[~~(x % radix)].push(seq[i]);
			x > 0 && (sorted = false);
		}
		if (sorted) break;
		// collect a new sequence
		let k = 0;
		for (let i = 0; i < radix; i++) {
			const bucket = buckets[i];
			bucket.forEach((x) => (seq[k++] = x));
		}
		p *= radix;
	}

	return seq;
}

console.time("sort");
const arr = [2, 4, 8, 4, 10, 1, 3, 3];
console.log(radixSort(arr));
// 1w: 15.279ms, 10w: 30.36ms, 100W: 188.318ms 1KW:1.993s
const arr2 = new Array(100000000).fill().map((x) => ~~(Math.random() * 1000));
radixSort(arr2);
console.log("==>", { arr2: arr2.slice(100, 200) });
console.timeEnd("sort");
