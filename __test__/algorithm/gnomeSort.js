function gnomeSort(seq) {
	let i = 0;
	while (i < seq.length) {
		// valid order should be <=
		if (i === 0 || seq[i - 1] <= seq[i]) i++;
		else ([seq[i - 1], seq[i]] = [seq[i], seq[i - 1]]), i--;
	}
	return seq;
}

console.time("sort");
console.log(gnomeSort([2, 4, 8, 4, 10, 1, 3, 3]));
// 1w: sort: 146.344ms; 10w: 13.423s;
const arr = gnomeSort(
	new Array(100000).fill().map((x) => ~~(Math.random() * 1000))
);
console.log("==>", { arr: arr.slice(100, 200) });
console.timeEnd("sort");

module.exports = gnomeSort;
