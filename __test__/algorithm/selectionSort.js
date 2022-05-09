function selectionSort(seq) {
	const len = seq.length;
	for (let i = 0; i < len - 1; i++) {
		let min = i;
		for (let j = i + 1; j < len; j++) seq[j] < seq[min] && (min = j);
		if (min !== i) [seq[i], seq[min]] = [seq[min], seq[i]];
	}
	return seq;
}

console.time("sort");
const arr = [2, 4, 8, 4, 10, 1, 3, 3];
console.log(selectionSort(arr));
// 1w: 117.619ms, 10w: 4.547s
const arr2 = new Array(100000).fill().map((x) => ~~(Math.random() * 1000));
selectionSort(arr2);
console.log("==>", { arr2: arr2.slice(100, 200) });
console.timeEnd("sort");
