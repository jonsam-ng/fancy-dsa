/**
 * Find the subset from set and the sum of subset should be equal to k.
 * The origin set should be asc sorted for higher performance
 * @param {*} set
 * @param {*} k
 */
function sumOfSubset(set, k) {
	const len = set.length,
		rst = [];

	function resolve(idx, subset, sum) {
		// found it!
		if (sum === k) rst.push(subset);
		// we can backtrack here
		if (sum >= k) return;
		// find deeply
		for (let i = idx; i < len; i++)
			resolve(i + 1, [...subset, set[i]], sum + set[i]);
	}

	resolve(0, [], 0);
	return rst;
}

const set = [1, 2, 3, 4, 5, 6, 7, 8];
const rst = sumOfSubset(set, 9);
console.log("==>", rst);

// [
//   [ 1, 2, 6 ],
//   [ 1, 3, 5 ],
//   [ 1, 8 ],
//   [ 2, 3, 4 ],
//   [ 2, 7 ],
//   [ 3, 6 ],
//   [ 4, 5 ]
// ]
