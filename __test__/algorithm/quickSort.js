function quickSort(seq) {
	if (!seq || !Array.isArray(seq) || seq.length < 2) return seq;
	const pivot = seq[0],
		right = [],
		left = [],
		len = seq.length;
	for (let i = 1; i < len; i++)
		seq[i] >= pivot ? right.push(seq[i]) : left.push(seq[i]);
	return [...quickSort(left), pivot, ...quickSort(right)];
}

function partition(seq, l, h) {
	const pivot = seq[h];
	let lowest = l;
	for (i = l; i <= h - 1; i++)
		seq[i] < pivot &&
			(([[seq[lowest], seq[i]]] = [[seq[i], seq[lowest]]]), lowest++);

	[seq[lowest], seq[h]] = [seq[h], seq[lowest]];
	return lowest;
}

function quickSortRecursive(seq, low, high) {
	if (!seq || !Array.isArray(seq) || seq.length < 2) return seq;
	// !!! This is important to break recursive
	if (low >= high) return seq;

	const index = partition(seq, low, high);
	quickSortRecursive(seq, low, index - 1);
	quickSortRecursive(seq, index + 1, high);
	return seq;
}

console.time("sort");
// const arr = [2, 4, 8, 4, 10, 1, 3, 3];
// console.log(quickSortRecursive(arr, 0, arr.length - 1));
// 1w: 19.643ms, 10w: 69.522ms, 100W: 2.637s
const arr = new Array(1000000).fill().map((x) => ~~(Math.random() * 1000));
quickSortRecursive(arr, 0, arr.length);
console.log("==>", { arr: arr.slice(100, 200) });
console.timeEnd("sort");
