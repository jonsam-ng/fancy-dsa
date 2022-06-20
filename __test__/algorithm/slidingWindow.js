function findMaxSubStringOfLength(seq, size) {
	const len = seq.length;
	if (len < size) return null;
	let left = 0,
		right = 0,
		sum = 0,
		max = sum;
	while (right < len) {
		sum += seq[right];
		right++;
		if (right - left >= size) {
			max = Math.max(max, sum);
			sum -= seq[left];
			left++;
		}
	}
	return max;
}

console.log(findMaxSubStringOfLength([1, 2, 5, 2, 8, 1, 5], 2));
console.log(findMaxSubStringOfLength([5, 2, 6, 9], 3));

// 1208. 尽可能使字符串相等
// 给你两个长度相同的字符串，s 和 t。

// 将 s 中的第 i 个字符变到 t 中的第 i 个字符需要 |s[i] - t[i]| 的开销（开销可能为 0），也就是两个字符的 ASCII 码值的差的绝对值。

// 用于变更字符串的最大预算是 maxCost。在转化字符串时，总开销应当小于等于该预算，这也意味着字符串的转化可能是不完全的。

// 如果你可以将 s 的子字符串转化为它在 t 中对应的子字符串，则返回可以转化的最大长度。

// 如果 s 中没有子字符串可以转化成 t 中对应的子字符串，则返回 0。

function tryMakeSubStrEqual(s, t, maxCost) {
	const toCost = (i) => Math.abs(s.charCodeAt(i) - t.charCodeAt(i));
	let left = 0,
		right = 0,
		cost = 0,
		max = 0;

	while (right < s.length) {
		cost += toCost(right);
		right++;
		while (cost > maxCost) {
			// ? -1
			max = Math.max(max, right - left - 1);
			cost -= toCost(left);
			left++;
		}
	}
	return max;
}

// 输入：s = "abcd", t = "bcdf", cost = 3
// 输出：3
// 解释：s 中的 "abc" 可以变为 "bcd"。开销为 3，所以最大长度为 3。

console.log(tryMakeSubStrEqual("abcd", "bcdf", 3) === 3);
console.log(tryMakeSubStrEqual("abcd", "cdef", 3) === 1);
console.log(tryMakeSubStrEqual("abcd", "acde", 0) === 1);

// 给你字符串 s 和整数 k 。

// 请返回字符串 s 中长度为 k 的单个子字符串中可能包含的最大元音字母数。

// 英文中的 元音字母 为（a, e, i, o, u）。

function findSpecialSubString(s, k) {
	const len = s.length;
	let left = 0,
		right = 0,
		max = 0;

	const hits = ["a", "e", "i", "o", "u"];

	const toValue = (l, r) =>
		s
			.slice(l, r + 1)
			.split("")
			.filter(Boolean)
			.filter((x) => hits.includes(x)).length;

	while (right < len) {
		if (right - left + 1 >= k) {
			max = Math.max(max, toValue(left, right));
			left++;
		}
		right++;
	}
	return max;
}

console.log(findSpecialSubString("abciiidef", 3) === 3);
console.log(findSpecialSubString("aeiou", 2) === 2);
console.log(findSpecialSubString("leetcode", 3) === 2);
console.log(findSpecialSubString("rhythms", 4) === 0);
console.log(findSpecialSubString("tryhard", 4) === 1);

// 给定一个数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。

// 返回滑动窗口中的最大值。

// 进阶：

// 你能在线性时间复杂度内解决此题吗？

function findMaxInWindow(nums, k) {
	const len = nums.length;
	let left = 0,
		right = 0,
		rst = [],
		last;
	while (right < len) {
		if (right - left + 1 >= k) {
			if (last === undefined) {
				last = nums[left];
				for (let i = left; i <= right; i++) if (nums[i] > last) last = nums[i];
			} else last = Math.max(last, nums[right]);
			rst.push(last);
			left++;
		}
		right++;
	}
	return rst;
}

// [ 3, 3, 5, 5, 6, 7 ]
console.log(findMaxInWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
