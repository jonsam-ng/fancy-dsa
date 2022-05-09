function shellSort(seq) {
	const len = seq.length;
	// compute step
	let step = 1;
	while (step * 3 + 1 <= len) step = step * 3 + 1;
	// scanning with step
	while (step > 0) {
		for (let i = step; i < len; i++) {
			let p = i,
				v = seq[i];
			while (p >= step && seq[p - step] > v) {
				seq[p] = seq[p - step];
				p -= step;
			}
			seq[p] = v;
		}
		step = (step - 1) / 3;
	}
	return seq;
}

console.time("sort");
const arr = [2, 4, 8, 4, 10, 1, 3, 3];
console.log(shellSort(arr));
// 1w: 10.064ms, 10w: 29.473ms 100W: 197.844ms 1KW: 2.143s
const arr2 = new Array(100000000).fill().map((x) => ~~(Math.random() * 1000));
shellSort(arr2);
console.log("==>", { arr2: arr2.slice(100, 200) });
console.timeEnd("sort");
