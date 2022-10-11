if (!Array.prototype.heapify)
	Object.defineProperty(Array.prototype, "heapify", {
		enumerable: false,
		writable: false,
		value: function (i, size) {
			let p = i,
				left = 2 * i + 1,
				right = 2 * i + 2;
			// make max-tree
			[left, right].forEach((d) => d <= size && this[d] > this[p] && (p = d));
			if (p !== i) {
				[this[i], this[p]] = [this[p], this[i]];
				this.heapify(p, size);
			}
		},
	});

if (!Array.prototype.heapSort)
	Object.defineProperty(Array.prototype, "heapSort", {
		enumerable: false,
		writable: false,
		value: function () {
			const len = this.length;
			// init max-heap tree
			for (let i = ~~(len / 2) - 1; i >= 0; i--) this.heapify(i, len - 1);
			// drop root and re-heapify
			for (let i = len - 1; i >= 0; i--) {
				[this[0], this[i]] = [this[i], this[0]];
				this.heapify(0, i - 1);
			}
		},
	});

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
