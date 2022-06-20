function binaryEquivalent(x) {
	if (x === 1 || x === 0) return String(x);
	return binaryEquivalent(~~(x / 2)) + String(x % 2);
}

console.log(binaryEquivalent(4));

function hanoi(n, from, aux, to, rst) {
	if (n === 1) {
		rst.push(`move 1 from ${from} to ${to}`);
		return rst;
	}
	hanoi(n - 1, from, to, aux, rst);
	rst.push(`move ${n} from ${from} to ${to}`);
	hanoi(n - 1, aux, from, to, rst);
	return rst;
}

console.log(hanoi(2, "A", "B", "C", []));
