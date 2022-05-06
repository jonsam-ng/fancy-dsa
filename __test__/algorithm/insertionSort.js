function insertionSort(seq) {
	const len = seq.length;
	if (!len) return seq;
	// scan seq from left to right
	for (let i = 1; i < len; i++) {
		const t = seq[i];
		// swap reverse and insertion
		let j = i - 1;
		while (seq[j] > t) {
			seq[j + 1] = seq[j];
			j--;
		}
		// insert front ordered subList
		seq[j + 1] = t;
	}
	return seq;
}

console.time("sort");
console.log(insertionSort([2, 4, 8, 4, 10, 1, 3, 3]));
// 1w: sort: 146.344ms; 10w: 13.423s;
// const arr = insertionSort(
// 	new Array(100000).fill().map((x) => ~~(Math.random() * 1000))
// );
// console.log("==>", { arr: arr.slice(100, 200) });
console.timeEnd("sort");

module.exports = insertionSort;
