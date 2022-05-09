function mergeSort(seq) {
	const len = seq.length,
		half = len >> 1;
	if (!seq || !Array.isArray(seq) || len < 2) return seq;

	function merge(seq1, seq2) {
		let i = (j = 0),
			result = [];
		while (i < seq1.length && j < seq2.length) {
			result.push(seq1[i] < seq2[j] ? seq1[i++] : seq2[j++]);
		}
		return result.concat(seq1.slice(i), seq2.slice(j));
	}

	// merge sub sequences
	return merge(mergeSort(seq.slice(0, half)), mergeSort(seq.slice(half)));
}

console.time("sort");
console.log(mergeSort([2, 4, 8, 4, 10, 1, 3, 3]));
// 1w: sort: 18.985ms; 10w: 90.89ms;
const arr = mergeSort(
	new Array(100000).fill().map((x) => ~~(Math.random() * 1000))
);
console.log("==>", { arr: arr.slice(100, 200) });
console.timeEnd("sort");

module.exports = mergeSort;
