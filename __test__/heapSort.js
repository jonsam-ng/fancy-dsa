// // bind heapify for Array
// function heapify(i, size) {
// 	let p = i,
// 		left = 2 * i + 1,
// 		right = 2 * i + 2;
// 	// find larger from left subtree
// 	if (left <= size && this[left] > this[p]) p = left;
// 	// find larger from right subtree
// 	if (right <= size && this[right] > this[p]) p = right;
// 	// find larger recursively
// 	if (p !== i) {
// 		[this[p], this[i]] = [this[i], this[p]];
// 		this.heapify(p, size);
// 	}
// }

// function heapSort(seq) {
// 	const len = seq.length;
// 	// init max heap heapify
// 	for (let i = ~~(len / 2) - 1; i >= 0; i--) seq.heapify(i, len - 1);
// 	// swap and
// 	for (let i = len - 1; i > 0; i--) {
// 		[seq[i], seq[0]] = [seq[0], seq[i]];
// 		seq.heapify(0, i - 1);
// 	}
// 	return seq;
// }

Array.prototype.heapify = function (i, size) {
	let p = i,
		left = 2 * i + 1,
		right = 2 * i + 2;

	if (left <= size && this[left] > this[p]) p = left;
	if (right <= size && this[right] > this[p]) p = right;

	if (p !== i) {
		[this[p], this[i]] = [this[i], this[p]];
		this.heapify(p, size);
	}
};

Array.prototype.heapSort = function () {
	const len = this.length;
	// init max heap array from first leaf
	for (let i = ~~(len / 2) - 1; i >= 0; i--) this.heapify(i, len - 1);
	// drop max and re-heapify
	for (let i = len - 1; i >= 0; i--) {
		[this[0], this[i]] = [this[i], this[0]];
		this.heapify(0, i - 1);
	}
};

console.time("sort");
const arr = [2, 4, 8, 4, 10, 1, 3, 3];
arr.heapSort();
console.log(arr);
// 1w: sort: 17.655ms; 10w: 46.262ms; 100W:381.377ms; 1KW:4.668s
// const arr = new Array(10000000)
// 	.fill()
// 	.map((x) => ~~(Math.random() * 1000))
// 	.heapSort();
// console.log("==>", { arr: arr.slice(100, 200) });
console.timeEnd("sort");

// module.exports = heapSort;
